# DESIGN.md — Portfolio (Apple visual language)

Explicit owner direction: Apple. This file is the soul of the design.
antislop is the filter on top of it. R-30 override recorded: owner asked for Apple.

## Identity

Personal portfolio that presents work the way Apple presents products: quiet
chrome, confident headlines, one blue for every action. The wall disappears,
the work takes over. No second brand color exists.

## Design Read

Reading this as: personal portfolio for hiring managers and collaborators,
in an Apple minimalist language, dial ENERGY 2 / RHYTHM 2 / MOTION 1.

## Palette (single accent, non negotiable)

Source of truth: `design-system/apple-hig-system-colors.csv` (Apple HIG).
Only Blue is active. Other HIG hues stay reserved (Red increased-contrast
`#E9152D` is pre-approved for future destructive/error text, 4.56:1 on white).

| Role | Hex (HIG) | Use | Reason |
| --- | --- | --- | --- |
| Action Blue | `#1E6EF4` (Blue Increased Contrast Light) | Every interactive element on light surfaces | Default Blue `#0088FF` fails AA on white at 3.52:1, this passes at 4.57:1 |
| Focus ring | `#1E6EF4` light / `#5CB8FF` dark | Keyboard focus ring, 2px solid | 4.57:1 on white, 7.90:1 on tile |
| Sky Link Blue | `#0091FF` (Blue Default Dark) | Links on dark tiles only, never on light | 5.26:1 on tile `#1C1C1E` |
| Ink | `#1d1d1f` | Headlines and body on light (never pure black) | HIG has no fixed label hex; near-black keeps the photographic feel |
| Canvas | `#ffffff` | Light tiles, cards | HIG light canvas |
| Parchment | `#F2F2F7` (Gray 6 Light) | Alternating light tiles, footer | HIG surface gray, rhythm against white |
| Tile dark 1/2/3 | `#1C1C1E` / `#2C2C2E` / `#242426` (Gray 6/5 Dark) | Alternating dark tiles | HIG dark surfaces, micro steps separate stacked tiles |
| Void black | `#000000` | Global nav bar only | Only true black on the page |
| Muted | `#6C6C70` (Gray Increased Contrast Light) | Secondary text on light | Default Gray `#8E8E93` fails at 3.26:1, this passes at 5.23:1 |
| Muted on dark | `#cccccc` | Secondary text on dark tiles | 9.28:1 on tile |
| Hairline | `#e0e0e0` | 1px borders on cards and chips | Unchanged utility hairline |

No decorative gradients. No second accent. Neutrals do not count as palette.

## Typography

Stack: `Inter` (via `next/font`, `display: swap`, latin), fallback
`system-ui, -apple-system, sans-serif`. Reason (R-06): closest open,
cross-platform stand-in for the Apple cadence with tight tracking kept
(`-0.28px` hero). Weights used: 400 / 600 / 700.

| Use | Size / Weight / Leading / Tracking |
| --- | --- |
| Hero | 56px / 600 / 1.07 / -0.28px (34px at phone, 28px at small phone) |
| Tile headline | 40px / 600 / 1.10 / 0 |
| Tagline | 21px / 600 / 1.19 / 0.231px |
| Body | 17px / 400 / 1.47 / -0.374px (never 16px) |
| Caption | 14px / 400 / 1.43 / -0.224px |
| Nav link | 12px / 400 / 1.0 / -0.12px |
| Fine print | 12px / 400, legal 10px |

Weight ladder is 300 / 400 / 600 / 700. Weight 500 never appears.

## Shape and elevation

Radius: tiles 0 (edge to edge), utility cards 18px, utility buttons 8px,
primary CTAs pill 9999px. One shadow exists in the whole system:
`rgba(0, 0, 0, 0.22) 3px 5px 30px`, for project imagery resting on a surface
only, never on cards, buttons, or text. Section rhythm comes from alternating
surfaces (white, parchment, dark tile), never from borders or shadows.

## Sections (content driven, C-3)

1. Global nav: 44px light frosted bar (`#F2F2F7` at 80% plus backdrop blur),
   name left, anchor links, one contact CTA. Owner override recorded: brand
   file specifies void black, owner chose light. Every link points at a
   section that exists (R-24).
2. Hero tile (light): name in hero display, one line role tagline, two pill
   CTAs (selected work anchor, contact anchor). No badge above the H1 (R-09).
3. Selected work: alternating parchment and white tiles, one project per
   tile, headline plus one line outcome plus link. No invented metrics (R-17).
   Owner override recorded: brand file alternates dark tiles, owner chose
   all-light. Dark HIG tiles stay in tokens, unused.
4. About (parchment): short real bio, no third person hype.
5. Contact (white): email link plus real profile links only.
6. Footer (parchment): fine print, sitemap anchors, no fake columns.

No testimonials (none are real, R-18). No FAQ (no real questions known, R-28).
No stats row (no sourced numbers, R-17).

## Motion (MOTION 1)

Hover states plus press `scale(0.95)` on buttons only. No scroll choreography,
no loops, no autoplay. `prefers-reduced-motion` disables everything.

## Placeholders (honest, R-23 / R-38)

Owner name is Rivoldy Makatita and role is Software Developer (both filled).
Remaining slots stay labeled until real data lands:
`[BIO]`, `[PROJECT]` tiles, `[EMAIL]`, `[PROFILE]` links.

## Logo assets (`public/brand/`)

Source: owner-supplied RAPM concept board (`design-system/` origin note in
`RAPM_Logo_Assets/README.txt`: AI-generated concepts, not production vectors).
Traced to clean binary SVG paths with vtracer plus PNG/ICO favicon exports.

| File | Use | Reason |
| --- | --- | --- |
| `rapm-mark.svg` | Nav brand mark, favicon source | Standalone M monogram, `currentColor` so it follows context |
| `rapm-wordmark-dark.svg` | Footer lockup on light | Full RAPM letters plus full name, traced from board |
| `rapm-wordmark-light.svg` | Reserved for dark surfaces | White version, unused while page is all-light |
| `favicon.ico`, `icon-*.png`, `apple-touch-icon.png` | Browser chrome | Downscaled from the mark mask |

R-04 note: the four-point star is part of the owner's own monogram
(identity, explicit instruction), not a generic feature icon. Keep it only
in brand assets, never as UI decoration.
Nothing fabricated to look final.
