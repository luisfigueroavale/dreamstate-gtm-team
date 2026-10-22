# Infographic rules

Optional steps for a numbered infographic. Use the owner's style from the local brand files. The brand folder and the audience folder are required before you draw. The Graphic Designer charter, the [design playbook](design-playbook.md), and [rules.md](rules.md) still apply.

This repo is for any team. It ships no brand colors, fonts, or logo rules. Do not put a company's values in these files.

Read [brand/AGENTS.md](../brand/AGENTS.md) before you draw. `brand.local/style.md` and `brand.local/tokens.css` are required. If they are missing or blank, stop and ask. Never guess. Run [brand/taste.md](../brand/taste.md) before the piece goes to the owner. The owner is still the final reviewer.

A source is the HTML you can edit. The still and the motion come from that same source. A still is the fully built frame with motion turned off. A filmstrip is a short row of frames from the motion, so a person can see the start, the built frame, and the restart.

## Copy comes first

The Head of Content accepts the words before the Graphic Designer draws. The designer does not invent a line, and does not write the caption that ships.

Each line on the image is an instruction or a fact the reader can act on. When the line is an action, start with a verb. Name the real thing. Use lines that already exist in the post the Head of Content accepted. Do not add a new claim on the image.

Do not invent a number. A figure stays off unless you can name the source that contains it.

## Layout

Use numbered boxes. Each box has a short name and at most three lines. Prefer fewer, larger boxes. If the words do not fit, split them onto another slide. Do not shrink the type to force a fit.

Keep the nameplates in one style from slide to slide. A nameplate is the short title on a step.

Before you build, write the reading order in one line: what comes in, what changes, and what comes out. The template reads from top to bottom: title, then the numbered steps, then the closing line.

The words are real HTML text. Do not bake the words into a picture. Labels do not overlap. Connectors do not cross or cover one another.

## Sizes

The starter frame is 1080 by 1350. Also render that same frame at 2× (2160 by 2700) when you want a sharper still. These are working sizes, not a platform rule. To-check.

If you make a carousel, a working range is 5 to 12 slides. One common set is about 7: an opening slide, the problem, the shape of the idea, one slide for each step, and a closing slide. Put the slide number in the footer. To-check. Not a platform rule. Split a crowded slide instead of shrinking the type.

Working export settings, also to-check, and not stated here as a LinkedIn rule. This page does not cite a LinkedIn help page.

- GIF: about 720 by 900, about 15 frames a second, aiming under about 5 MB.
- MP4: 1080 by 1350, H.264, about 25 frames a second, when the file is meant to play as video.

If you are unsure, leave the item marked to-check and ask the owner.

## Motion

The motion is a JavaScript timeline in the same HTML file. CSS and SVG hold the layout and the picture. They do not run the motion by themselves. The script moves those elements. `design/scripts/capture-frames.mjs` and `design/scripts/render-png.mjs` seek that same timeline.

Pieces arrive in reading order. Each arrival lasts 0.4 seconds, with an ease-out, and with no bounce. The title, the steps, and the closing line are all on screen by about 2.3 seconds.

After that, one gentle loop of about 6 seconds. The end of that loop matches its start. Nothing blinks.

The still PNG is the final frame of that build, from the same source and the same seek. That frame is the timeline at about 2.3 seconds, when every piece is visible. The loop returns to that same pose. The render script adds the class `is-still` and seeks to that frame. Do not export the motion until the owner has accepted that still.

A GIF may restart on the empty first frame, so the build plays again. An MP4 of the same frames starts empty, builds, then plays the gentle loop once. If a player repeats that file from the first frame, the repeat cuts back to empty. To-check whether you want that repeat. The gentle loop itself does not jump.

## Closing line

Put one real next step on the image, and no extra pitch. The Head of Content supplies the words. Two kinds of line are enough: ask the reader to save the post, or, when the owner has a lead magnet and has named the word, ask them to connect and comment that word. Do not invent the word. The closing line is visible by about 2.3 seconds. It is not held back for the loop.

## Review

Look at the render at the export size, then again at phone width. This repo does not set the phone width in pixels. Use the width in `brand.local/style.md` if the owner wrote one. If that line is blank, ask. Do not invent a pixel width. Pass `--phone-width=` to the render script when you have a number. The filmstrip below is part of the review. `brand/taste.md` does not replace it.

Use the filmstrip the capture script writes under `work/infographic/review/`:

- The first frame is empty, or as empty as the build allows.
- The frame at about 2.3 seconds shows the full build, including the closing line.
- For the gentle loop, the frame at the end of that loop matches the frame where the loop begins.
- If the GIF is set to restart empty, the last frame should lead into that empty first frame without a flash in the middle.

Each round, fix the single largest problem, then look again. Two or three rounds is the working limit. Stop early if the owner is satisfied.

The owner is the final reviewer. A script that exits cleanly has not reviewed the piece. Do not say it passed because the files exist.

Attaching the PNG, GIF, or MP4 to a social draft can clear an earlier yes, so ask again before any schedule. Nothing is posted or scheduled without the owner's yes on that exact item.

## Files

- Starter frame: [design/templates/infographic-steps.html](../design/templates/infographic-steps.html)
- Still PNGs at 1× and 2×: `design/scripts/render-png.mjs`
- Frame capture: `design/scripts/capture-frames.mjs`
- MP4, GIF, and a PNG fallback: `design/scripts/export-motion.mjs`

Output goes to `work/infographic/`, which is gitignored. Run the scripts on the owner's Mac. They need Playwright (or the Chromium it downloads) and ffmpeg. Skip them if you are not making this piece.

```sh
node design/scripts/render-png.mjs
node design/scripts/capture-frames.mjs
node design/scripts/export-motion.mjs
```

An optional phone check, once the owner names a width:

```sh
node design/scripts/render-png.mjs --phone-width=390
```

The number 390 above is only an example of the flag. It is not the phone width for this repo.
