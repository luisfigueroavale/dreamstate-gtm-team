// Still PNGs of one HTML source, at 1x and 2x.
// The still is the final frame of the build on the JavaScript timeline
// (body class is-still, then __infographicSeek at data-build-ms).
// Output lands in work/infographic/, which is gitignored.
//
//   node design/scripts/render-png.mjs [--html=path] [--out=dir] [--phone-width=N]
//
// This repo does not set a phone width. Pass one only after the owner names it.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const WIDTH = 1080;
const HEIGHT = 1350;

function readArgs(argv) {
  let phone = null;
  let html = path.join(repo, 'design/templates/infographic-steps.html');
  let dir = path.join(repo, 'work/infographic');
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--phone-width=')) phone = Number(arg.slice('--phone-width='.length));
    else if (arg.startsWith('--html=')) html = arg.slice('--html='.length);
    else if (arg.startsWith('--out=')) dir = arg.slice('--out='.length);
  }
  return { html: path.resolve(html), dir: path.resolve(dir), phone };
}

async function shoot(browser, html, file, width, height, scale) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: scale,
  });
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(pathToFileURL(html).href);
  await page.evaluate(() => {
    document.body.classList.add('is-still');
    const frame = document.querySelector('.frame');
    const buildMs = Number(frame?.dataset.buildMs || 2300);
    if (typeof window.__infographicSeek === 'function') window.__infographicSeek(buildMs);
  });
  const frame = page.locator('.frame');
  await frame.screenshot({ path: file });
  await context.close();
}

const { html, dir, phone } = readArgs(process.argv);
if (!fs.existsSync(html)) {
  console.error(`Missing HTML: ${html}`);
  process.exit(1);
}
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
await shoot(browser, html, path.join(dir, 'still-1x.png'), WIDTH, HEIGHT, 1);
await shoot(browser, html, path.join(dir, 'still-2x.png'), WIDTH, HEIGHT, 2);

if (Number.isFinite(phone) && phone > 0) {
  const phoneHeight = Math.round(HEIGHT * (phone / WIDTH));
  const context = await browser.newContext({
    viewport: { width: phone, height: phoneHeight },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(pathToFileURL(html).href);
  await page.evaluate((target) => {
    document.body.classList.add('is-still');
    const frame = document.querySelector('.frame');
    const buildMs = Number(frame?.dataset.buildMs || 2300);
    if (typeof window.__infographicSeek === 'function') window.__infographicSeek(buildMs);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    frame.style.transformOrigin = 'top left';
    frame.style.transform = `scale(${target / 1080})`;
  }, phone);
  await page.screenshot({
    path: path.join(dir, `still-phone-${phone}.png`),
    clip: { x: 0, y: 0, width: phone, height: phoneHeight },
  });
  await context.close();
  console.log(`Phone-width still written at ${phone}px. That width came from the flag, not from this repo.`);
} else {
  console.log('Phone-width still skipped. This repo does not set a phone width. Pass --phone-width=N when the owner names one.');
}

await browser.close();
console.log(`Wrote still-1x.png and still-2x.png in ${dir}`);
console.log('These files are not a review. The owner is the final reviewer.');
