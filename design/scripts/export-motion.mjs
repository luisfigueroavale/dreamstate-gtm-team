// MP4 (H.264) and GIF from captured frames, plus a still PNG fallback.
// Working settings, not platform rules. To-check.
//   MP4: 1080x1350, H.264, 25 fps
//   GIF: 720x900, 15 fps, aim under about 5 MB
// The GIF loops back to the empty first frame. The still is the built frame.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');

function readArgs(argv) {
  let dir = path.join(repo, 'work/infographic');
  let html = path.join(repo, 'design/templates/infographic-steps.html');
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--out=')) dir = arg.slice('--out='.length);
    else if (arg.startsWith('--html=')) html = arg.slice('--html='.length);
  }
  return { dir: path.resolve(dir), html: path.resolve(html) };
}

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: 'inherit' });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function ensure(script, html, dir) {
  const scriptPath = path.join(here, script);
  const result = spawnSync(process.execPath, [scriptPath, `--html=${html}`, `--out=${dir}`], {
    stdio: 'inherit',
    cwd: repo,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const { dir, html } = readArgs(process.argv);
const framesDir = path.join(dir, 'frames');
const exportDir = path.join(dir, 'export');
fs.mkdirSync(exportDir, { recursive: true });

if (!fs.existsSync(path.join(dir, 'still-1x.png'))) {
  ensure('render-png.mjs', html, dir);
}
if (!fs.existsSync(framesDir) || fs.readdirSync(framesDir).filter((name) => name.endsWith('.png')).length === 0) {
  ensure('capture-frames.mjs', html, dir);
}

const ffmpeg = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' });
if (ffmpeg.status !== 0) {
  console.error('ffmpeg is not on the PATH. Install it on the Mac, then run this again.');
  process.exit(1);
}

const mp4 = path.join(exportDir, 'infographic.mp4');
const gif = path.join(exportDir, 'infographic.gif');
const palette = path.join(exportDir, 'palette.png');
const fallback = path.join(exportDir, 'infographic-still.png');

run('ffmpeg', [
  '-y',
  '-framerate', '25',
  '-i', path.join(framesDir, 'frame-%04d.png'),
  '-c:v', 'libx264',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  mp4,
]);

run('ffmpeg', [
  '-y',
  '-i', mp4,
  '-vf', 'fps=15,scale=720:900:flags=lanczos,palettegen',
  palette,
]);
run('ffmpeg', [
  '-y',
  '-i', mp4,
  '-i', palette,
  '-lavfi', 'fps=15,scale=720:900:flags=lanczos[x];[x][1:v]paletteuse',
  gif,
]);

fs.copyFileSync(path.join(dir, 'still-1x.png'), fallback);

const gifBytes = fs.statSync(gif).size;
const mp4Bytes = fs.statSync(mp4).size;
console.log(`MP4 ${mp4Bytes} bytes (H.264, 25 fps, 1080x1350 source frames). To-check. Not a platform rule.`);
console.log(`GIF ${gifBytes} bytes (720x900, 15 fps). Working aim is under about 5 MB. To-check. Not a platform rule.`);
if (gifBytes > 5 * 1024 * 1024) {
  console.log('The GIF is over that working aim. Ask the owner before you treat the size as a failure.');
}
console.log(`PNG fallback: ${fallback}`);
console.log('Export does not approve the piece. The owner is the final reviewer.');
