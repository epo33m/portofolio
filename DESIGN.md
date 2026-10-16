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

| Role | Hex | Use |
| --- | --- | --- |
| Action Blue | `#0066cc` | Every interactive element on light surfaces |
| Focus Blue | `#0071e3` | Keyboard focus ring, 2px solid |
| Sky Link Blue | `#2997ff` | Links on dark tiles only, never on light |
| Ink | `#1d1d1f` | Headlines and body on light (never pure black) |
| Canvas | `#ffffff` | Light tiles, cards |
| Parchment | `#f5f5f7` | Alternating light tiles, footer |
| Tile dark 1/2/3 | `#272729` / `#2a2a2c` / `#252527` | Alternating dark tiles |
| Void black | `#000000` | Global nav bar only |
| Muted | `#7a7a7a` | Disabled states only (fails AA on light, R-25). Secondary text uses `#616161` |
| Hairline | `#e0e0e0` | 1px borders on cards and chips |

No decorative gradients. No second accent. Neutrals do not count as palette.

## Typography

Stack: `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`.
On Apple devices this resolves to real SF Pro. Off system, Inter is the substitute
with `-0.01em` tracking nudge on display sizes.

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

1. Global nav: 44px void black bar, name left, anchor links, one contact CTA.
   Every link points at a section that exists (R-24).
2. Hero tile (light): name in hero display, one line role tagline, two pill
   CTAs (selected work anchor, contact anchor). No badge above the H1 (R-09).
3. Selected work: alternating light and dark full bleed tiles, one project per
   tile, headline plus one line outcome plus link. No invented metrics (R-17).
4. About (parchment): short real bio, no third person hype.
5. Contact (dark tile): email link plus real profile links only.
6. Footer (parchment): fine print, sitemap anchors, no fake columns.

No testimonials (none are real, R-18). No FAQ (no real questions known, R-28).
No stats row (no sourced numbers, R-17).

## Motion (MOTION 1)

Hover states plus press `scale(0.95)` on buttons only. No scroll choreography,
no loops, no autoplay. `prefers-reduced-motion` disables everything.

## Placeholders (honest, R-23 / R-38)

Owner content not yet supplied. Every slot is labeled until real data lands:
`[NAMA]`, `[PERAN]`, `[BIO]`, `[PROYEK]` tiles, `[EMAIL]`, `[PROFIL]` links.
Nothing fabricated to look final.
