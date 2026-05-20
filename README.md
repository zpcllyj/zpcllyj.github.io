# pczhang.com

Personal site for Pengcheng Zhang. Plain HTML/CSS/JS, served from GitHub Pages, custom domain via Dynadot.

## File structure

```
.
├── CNAME                       # Custom domain ("pczhang.com")
├── index.html                  # Home (bio, Education, Academic Appointments)
├── publications.html           # Publications grouped by Submitted / year
├── gallery.html                # Cloud / atmosphere videos
├── calendar.html               # Hidden: weekly schedule (linked nowhere; share URL directly)
├── schedule.html               # Redirect → calendar.html
├── assets/
│   ├── style.css               # Shared stylesheet (CSS vars at top)
│   └── script.js               # Email assembly (anti-scraper)
├── images/
│   └── profile.jpg
└── files/
    ├── cv_english.pdf
    ├── CloudTops.mp4
    ├── marine_layer.mp4
    └── paper/                  # Per-paper PDFs (linked from publications.html)
        ├── 2025_Zhang_JAS.pdf
        ├── 2025_Peng_NatGeo.pdf
        ├── 2025_Xie_npj.pdf
        ├── 2024_Zhang_NatComm.pdf
        ├── 2024_Zhang_JClim.pdf
        └── 2022_Zhang_JAS.pdf
```

## Navigation

Three top-level pages: **Home**, **Publications**, **Gallery**.
`calendar.html` and `schedule.html` are intentionally absent from the nav.
`/calendar` shows my Google Calendar embedded in the site's layout (ctz set
to America/Chicago). `/schedule` is a meta-refresh + JS redirect to
`/calendar` so either URL works when shared. Both hidden pages carry
`<meta name="robots" content="noindex, nofollow">`.

## Fonts

The site uses the **system font stack** only — no webfont files, no Google
Fonts. The stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
…`) renders SF Pro on macOS/iOS, Segoe UI on Windows, Roboto on Android,
and reasonable defaults elsewhere. This keeps the site equally fast
worldwide (including mainland China) with zero font-loading delay.

If `assets/fonts/` still exists from the previous Geist-based design, it
can be safely deleted.

## Anti-scraper email handling

`pczhang@uchicago.edu` is never written verbatim in the HTML source.
Each `<a class="email-link" data-u="pczhang" data-d="uchicago.edu">`
displays "pczhang [at] uchicago.edu" until `assets/script.js` assembles
the real address at runtime and rewrites the `mailto:` href and text.

To use the same pattern for another address:

```html
<a class="email-link" data-u="USERNAME" data-d="DOMAIN.TLD" href="#">
  <span class="email-text">USERNAME [at] DOMAIN.TLD</span>
</a>
```

## Editing content

- **New publication** — copy a `<li>` block inside the appropriate
  `<section class="pub-group">` in `publications.html`. Bold own name with
  `<strong>`; equal-contribution authors get `<sup>†</sup>`; links append
  as `<a class="meta" href="…">[link]</a>` and `<a class="meta"
  href="files/paper/…">[pdf]</a>`. A `[news]` link can be added the same
  way when relevant.
- **Update Education or Appointments** — edit the `<ul class="cv-list">`
  blocks on `index.html`.
- **Adjust design tokens** (color, spacing, type scale) — CSS variables at
  the top of `assets/style.css`.

## Deploying

Edit locally, commit, push. GitHub Pages rebuilds in ~1 minute and the
custom domain keeps working.

```bash
git add -A
git commit -m "Update site"
git push
```

## Optional: video compression

Re-encode gallery MP4s for web playback:

```bash
ffmpeg -i CloudTops.mp4 \
  -c:v libx264 -crf 23 -preset slow -vf "scale=-2:720" \
  -c:a aac -b:a 96k -movflags +faststart \
  CloudTops_web.mp4
```

The `+faststart` flag puts metadata at the front of the file so playback
starts before the file fully downloads.
