# pczhang.com

Personal site for Pengcheng Zhang.

## File structure

```
.
├── index.html               # Home (About, Research, Selected Pubs, News, Contact)
├── publications.html        # Full publication list
├── gallery.html             # Cloud / atmosphere videos
├── assets/
│   ├── style.css            # Shared stylesheet
│   ├── script.js            # Email assembly (anti-scraper)
│   └── fonts/
│       ├── Geist.woff2      # Self-hosted variable font (all weights)
│       └── GeistMono.woff2  # Self-hosted variable mono
├── images/
│   └── profile.jpg          # Profile photo (reuse existing)
└── files/
    ├── cv_english.pdf       # CV (reuse existing)
    ├── CloudTops.mp4        # (reuse existing)
    └── marine_layer.mp4     # (reuse existing)
```

## Why self-hosted fonts

The site does NOT load fonts from `fonts.googleapis.com` because that domain
is unreliable from mainland China. Geist (Vercel's open-source typeface) is
bundled as two variable-font files inside `assets/fonts/` — total ~138 KB.
This makes the site fully self-contained and equally fast worldwide.

## Anti-scraper email handling

The email address `pczhang@uchicago.edu` is NEVER written verbatim in the
HTML source. Instead:

- The HTML contains `<a class="email-link" data-u="pczhang" data-d="uchicago.edu">`
  and the displayed text reads "pczhang [at] uchicago.edu" (no `@` symbol).
- On page load, `assets/script.js` reads the data attributes, assembles
  `user + @ + domain`, sets the `mailto:` href, and replaces the visible
  text so visitors see the normal address.
- Naive scrapers searching for `name@domain.tld` patterns in raw HTML find
  no match. JS-running scrapers can still de-obfuscate, but this stops the
  majority of automated spam-list harvesters.

To use the same pattern for another address, copy a block like:

```html
<a class="email-link" data-u="USERNAME" data-d="DOMAIN.TLD" href="#">
  <span class="email-text">USERNAME [at] DOMAIN.TLD</span>
</a>
```

## Deploying to GitHub Pages

Your custom domain `pczhang.com` (Dynadot DNS → GitHub Pages) stays
unchanged. Just replace the site contents:

1. Back up the existing repo: `git clone … backup-academicpages`
2. In the existing Pages repo, remove old Jekyll files but **keep** the
   `images/`, `files/`, and `CNAME` files (CNAME holds `pczhang.com`).
3. Copy these new files into the repo root, preserving the directory layout.
4. Commit and push:
   ```bash
   git add -A
   git commit -m "Redesign site with modern minimal layout"
   git push
   ```
5. GitHub Pages rebuilds in ~1 minute; the custom domain keeps working.

Old `_config.yml` and `Gemfile` from AcademicPages can either be deleted or
left in place (harmless — GitHub will simply serve the HTML directly).

## Optional: video compression

Re-encode the two MP4 files to web-optimised H.264 to cut size 5–10×:

```bash
ffmpeg -i CloudTops.mp4 \
  -c:v libx264 -crf 23 -preset slow -vf "scale=-2:720" \
  -c:a aac -b:a 96k -movflags +faststart \
  CloudTops_web.mp4
```

The `+faststart` flag puts metadata at the front so playback starts before
the file fully downloads.

## Editing content

All pages are plain HTML — no build step. To add a publication, copy a
`<li class="pub-item">` block. To add a news entry, copy a
`<li class="news-item">` block. Style adjustments live in `assets/style.css`
(CSS variables at the top control colour and spacing globally).
