# Project: Personal academic website (pczhang.com)

## What this project is
Iterative development and maintenance of my personal academic homepage at
pczhang.com, hosted on GitHub Pages with a Dynadot-managed custom domain.
The site is currently being redesigned from a Jekyll AcademicPages template
to a custom modern-minimal layout written in plain HTML/CSS/JS.

## Tech stack and hard constraints
- Plain HTML + CSS + a small vanilla JS file. No Jekyll, no Hugo, no React,
  no build step. The repo serves files directly via GitHub Pages.
- **No external CDN dependencies whatsoever.** In particular:
  - NO Google Fonts (blocked in mainland China). Fonts are self-hosted in
    `assets/fonts/` as woff2 files.
  - NO Tailwind CDN, no Bootstrap, no jQuery, no analytics scripts.
- The site must load identically and fast from anywhere in the world,
  including mainland China.
- The email address `pczhang@uchicago.edu` must never appear verbatim in
  any HTML source. Use the existing obfuscation pattern: `<a class="email-link"
  data-u="pczhang" data-d="uchicago.edu">` with `<span class="email-text">
  pczhang [at] uchicago.edu</span>`, decoded at runtime by `assets/script.js`.

## File structure (uploaded as project knowledge)
- `index.html` — Home page: hero, About, Research, Selected publications, News, Contact
- `publications.html` — Full publication list
- `gallery.html` — Two cloud videos
- `assets/style.css` — All styling, with CSS variables at the top
- `assets/script.js` — Email assembly only

## Design system
- Font: Geist Sans (body and headings), Geist Mono (labels, dates, version numbers).
  System font fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Colour: predominantly neutral (white background, near-black text, gray hairlines).
  Single accent colour `#1e3a5f` (deep ocean blue), used for links, hero streamlines,
  nav logo. No other accent colours except small status indicators (green dot in hero,
  warm-yellow "Under review" tag, purple "Equal contribution" tag).
- Max content width: 720 px (main column), 880 px (nav). Generous vertical rhythm.
- Section labels in uppercase Geist Mono, 11 px, letterspaced — used as eyebrow
  text above each section heading.
- Hover effects are subtle (background tint, border colour shift, slight gap change
  on CTAs). No dramatic animations. The only entrance animation is a fade-up on
  hero content children with 0/80/160/240 ms staggered delays.

## How I want responses
- Be direct and concise. I am the only user of this project and I already know
  the design system — no need to re-explain unless I ask.
- When I request a change, give me the smallest patch that does it. Default to
  showing me only the modified blocks unless the change is large enough that a
  full file is clearer.
- If a change would have side effects elsewhere (e.g. a CSS rename), point them
  out before I have to discover them.
- For new content (a new paper, a news entry), write the HTML block in the
  exact existing pattern. Do not refactor the surrounding code unless I ask.
- For redesigns or visual experiments, you may propose options, but commit
  to one default and clearly mark alternatives.

## Things I will likely ask for, in rough order of frequency
- Adding a publication, news entry, or talk
- Updating bio / affiliation / office address as I move positions
- Adding a new section (e.g. Teaching, Software, Talks page)
- Compressing/encoding new gallery videos with ffmpeg
- Adjusting design tokens (spacing, colours, type scale)
- Adding analytics that respect privacy and work in China (e.g. self-hosted
  Plausible or Umami — NOT Google Analytics)

## Deployment workflow
- I edit files locally, commit and push to my GitHub Pages repo, custom
  domain `pczhang.com` stays unchanged.
- Never propose moving away from GitHub Pages unless I ask. Cloudflare Pages
  is an acceptable alternative if I bring it up.

## What NOT to do
- Don't introduce build steps, npm/yarn, package.json, or bundlers.
- Don't suggest CSS frameworks. Plain CSS with my variables is enough.
- Don't add tracking, ads, or third-party widgets.
- Don't add long paragraphs of explanatory comments to my HTML/CSS — keep
  comments to brief section markers only.
- Don't propose changes "just to modernise" — the design is already where I
  want it. Wait for me to ask.
