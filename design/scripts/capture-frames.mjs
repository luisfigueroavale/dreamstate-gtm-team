// Capture PNG frames from the same HTML the still uses.
// The page exposes window.__infographicSeek. This script seeks that
// JavaScript timeline. It does not depend on CSS animations.
// Frame 1 is the empty start. A frame at about 2.3s is the full build.
// The frame at build + loop should match the build, if the loop is seamless.
// Writes a filmstrip under work/infographic/review/. It does not approve anything.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const WIDTH = 1080;
const HEIGHT = 1350;
const STEP_MS = 40;

function readArgs(argv) {
  let html = path.join(repo, 'design/templates/infographic-steps.html');
  let dir = path.join(repo, 'work/infographic');
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--html=')) html = arg.slice('--html='.length);
    else if (arg.startsWith('--out=')) dir = arg.slice('--out='.length);
  }
  return { html: path.resolve(html), dir: path.resolve(dir) };
}

async function seek(page, ms) {
  await page.evaluate(async (time) => {
    if (typeof window.__infographicSeek === 'function') {
      window.__infographicSeek(time);
    } else {
      const animations = document.getAnimations();
      await Promise.all(animations.map((item) => item.ready));
      for (const item of animations) {
        item.pause();
        item.currentTime = time;
      }
    }
    await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  }, ms);
}

const { html, dir } = readArgs(process.argv);
if (!fs.existsSync(html)) {
  console.error(`Missing HTML: ${html}`);
  process.exit(1);
}
const framesDir = path.join(dir, 'frames');
const reviewDir = path.join(dir, 'review');
fs.mkdirSync(framesDir, { recursive: true });
fs.mkdirSync(reviewDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
await page.emulateMedia({ reducedMotion: 'no-preference' });
await page.goto(pathToFileURL(html).href);
await page.evaluate(() => document.fonts.ready);
const timing = await page.evaluate(() => {
  const frame = document.querySelector('.frame');
  return {
    buildMs: Number(frame?.dataset.buildMs || 2300),
    loopMs: Number(frame?.dataset.loopMs || 6000),
  };
});
const endMs = timing.buildMs + timing.loopMs;

let index = 0;
for (let time = 0; time <= endMs; time += STEP_MS) {
  await seek(page, time);
  index += 1;
  const name = `frame-${String(index).padStart(4, '0')}.png`;
  await page.locator('.frame').screenshot({ path: path.join(framesDir, name) });
}

async function saveExact(time, fileName) {
  await seek(page, time);
  await page.locator('.frame').screenshot({ path: path.join(reviewDir, fileName) });
}

await saveExact(0, 'filmstrip-empty.png');
await saveExact(timing.buildMs, 'filmstrip-built.png');
await saveExact(endMs, 'filmstrip-loop-end.png');

const note = [
  'Filmstrip for a person to look at. This file is not a review.',
  'filmstrip-empty.png is the start, at 0 ms.',
  `filmstrip-built.png is the full build, at ${timing.buildMs} ms.`,
  `filmstrip-loop-end.png is the end of the gentle loop, at ${endMs} ms. It should match the built frame.`,
  'A GIF that restarts empty should cut from the last frame back to the empty start. Check that cut yourself.',
  'Also look at the still at export size and at phone width. The owner is the final reviewer.',
].join('\n');
fs.writeFileSync(path.join(reviewDir, 'filmstrip.txt'), `${note}\n`);
const strip = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Filmstrip</title>
  <style>
    body { font-family: sans-serif; margin: 16px; }
    img { width: 180px; height: auto; border: 1px solid gray; }
    figure { display: inline-block; margin: 0 12px 0 0; }
  </style>
</head>
<body>
  <p>Look at these frames. This page does not approve the piece. The owner is the final reviewer.</p>
  <figure><img src="filmstrip-empty.png" alt=""><figcaption>Start</figcaption></figure>
  <figure><img src="filmstrip-built.png" alt=""><figcaption>About 2.3s</figcaption></figure>
  <figure><img src="filmstrip-loop-end.png" alt=""><figcaption>Loop end</figcaption></figure>
</body>
</html>
`;
fs.writeFileSync(path.join(reviewDir, 'filmstrip.html'), strip);

await browser.close();
console.log(`Wrote ${index} frames in ${framesDir}`);
console.log(`Filmstrip: ${reviewDir}`);
console.log('These files are not a review. The owner is the final reviewer.');
