# Kiln Coffee Roasters

Static website for Kiln, a coffee roastery and bakery in Liverpool. Plain HTML, CSS and a little JavaScript. No build step.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

```
index.html            Homepage
menu.html             Full menu (has a print stylesheet: File > Print gives a clean sheet)
404.html              Not-found page (uses /kiln/ absolute paths for GitHub Pages)
assets/css/style.css  All styles, including @font-face
assets/js/main.js     Open status, scroll reveals, header and nav state
assets/fonts/         Self-hosted Big Shoulders Display and Archivo (OFL licences alongside)
assets/favicon.svg    Favicon
assets/og.png         Social share image (1200x630)
manifest.webmanifest  Web app manifest
```

## Notes

- Hours, prices, address and email are placeholders. Hours in `main.js` drive the live open status and today's highlight.
- Photos hotlink from Unsplash. Swap in your own under `assets/` when you have them.
- Asset URLs carry a `?v=` query. Bump it when `style.css` or `main.js` change so caches don't mix old and new.
- Deployed with GitHub Pages from `main`.
