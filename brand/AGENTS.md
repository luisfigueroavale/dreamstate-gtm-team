# Brand folder

Read this file first. Every content seat and the Graphic Designer starts here, before a draft or a design.

This repo is for any team. The files in `brand/` are blank templates. They hold no company name, no offer, no colors, and no logo. Do not type a company's values into these files. Do not paste Company Context into them. Company Context is the pages in that team's own Dreamstate workspace.

## What each file is for

| File | What it holds |
|---|---|
| `brand/AGENTS.md` | This page. Read order, required files, and when to stop. |
| `brand/identity.md` | Blank form for who we are, the offer, the audience, the positioning, and the proof sources. |
| `brand/voice.md` | Blank form for tone, word rules, do and don't, banned words, and example lines. |
| `brand/style.md` | Blank form for colors, fonts, type sizes and scale, spacing, grid, and platform sizes. |
| `brand/tokens.css` | The same style names as CSS variables. It sets no values. Templates import it. |
| `brand/assets/README.md` | How to list owner-supplied logos, photos, and icons, and where each file may be used. |
| `brand/taste.md` | The quality checklist a draft or a design passes before it reaches the owner. |

## Local copy

One pattern. Copy the blank files into `brand.local/` and keep the same names.

```text
brand.local/identity.md
brand.local/voice.md
brand.local/style.md
brand.local/tokens.css
brand.local/assets/README.md
brand.local/assets/   (the logo, photo, and icon files the owner supplies)
```

`brand.local/` is listed in `.gitignore`. Fill that folder. Do not commit it. Do not keep a second filled copy under `work/`. `work/` is for renders and other local output.

Do not copy this file into `brand.local/`. This page stays the entry point.

`brand/taste.md` is the checklist you run. It is not a brand-value form. An extra local list, if the owner writes one, is `brand.local/taste.md`. Run the shared checklist either way.

## Read order

1. `brand/AGENTS.md` (this file).
2. `brand.local/identity.md`.
3. `brand.local/voice.md`.
4. `brand.local/style.md`, before a design.
5. `brand.local/tokens.css`, before a design.
6. `brand.local/assets/README.md`, before a design that uses a logo, a photo, or an icon.
7. `brand/taste.md` on the finished draft or design, before it goes to the owner.

A draft is words the owner will see: a post, a sequence note, a comment, a title, a description, or a plan that names the proof. A design is an image, a thumbnail, a carousel, a diagram, or a motion file.

## Required files

Required before a draft:

- `brand.local/identity.md`
- `brand.local/voice.md`

Required before a design:

- `brand.local/identity.md`
- `brand.local/voice.md`
- `brand.local/style.md`
- `brand.local/tokens.css`
- `brand.local/assets/README.md`, when the piece uses a logo, a photo, or an icon

A required file is blank when it is missing, when it is still the untouched template, or when a line that file marks as required has nothing after it. An optional line can stay empty. If the piece needs an empty line, stop and ask the owner. Never guess. Do not invent a claim, a color, a font, a banned word, a margin, or a proof line to fill the gap.

The owner fills `brand.local/`. A seat does not write those values into a committed file. Reading a Company Context page does not fill the local file. If the page and the local file disagree, stop and ask.

Before the work is handed to the owner, run `brand/taste.md`. Run the sections that fit the piece. Say which sections you skipped. A pass on that list is not a yes to send, post, schedule, enroll, or launch.
