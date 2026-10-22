# Style

Blank template. The filled copy is `brand.local/style.md`. Do not put a company's colors, fonts, or sizes in this file.

Mirror every value you fill into `brand.local/tokens.css`, using the names in `brand/tokens.css`. The shared `brand/tokens.css` sets nothing.

You can read Tone of Voice, Product Information, and thumbnail preferences (`workspace.thumbnail_preferences_get`) while you fill the local copy. Write the values only there. If a page does not state a value, leave the line blank. Do not invent a color, a font, a size, or a margin.

Required before any design: background, text, font family, title, body, small label, space between blocks, and the safe margin. Accent, muted, scale, grid, platform sizes, logo, and motion can stay blank until the piece needs them. If the piece needs a blank line, stop and ask. Do not invent the value.

## Colors

- Background (`--color-bg`):
- Text (`--color-fg`):
- Accent (`--color-accent`):
- Muted (`--color-muted`):

## Fonts

- Font family (`--font-sans`):
- Font file, if you supply one:

## Type sizes and scale

- Title (`--size-title`):
- Body (`--size-body`):
- Small label (`--size-kicker`):
- Scale step (`--type-scale`):

## Spacing

- Space between blocks (`--space-block`):
- Inset from each edge (`--space-safe`):

## Grid

- Columns (`--grid-columns`):
- Gutter (`--grid-gutter`):

## Platform sizes

These are working sizes for the starters in `design/templates/`. They are not platform rules. To-check. This page does not cite a LinkedIn help page.

- Portrait frame, such as a carousel slide:
- Square frame:
- Wide frame:
- Thumbnail frame:
- Phone-width check, in pixels:

This repo does not set a phone width. Leave that line blank if you do not have one.

## Motion

Fill this only if you want a GIF or an MP4. Blank is fine. A number here is the owner's choice. It is not a platform rule.

- Duration:
- Frame rate:
- File-size target:

## Logo

- Logo file name, if you supply one. List it in `brand.local/assets/README.md`:
- Maximum height (`--logo-max-height`):
