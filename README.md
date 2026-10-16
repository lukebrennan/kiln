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
404.html              Not-found page (uses /kiln/ absolute paths for GitHub Pages)
assets/css/style.css  All styles
assets/js/main.js     Open status, menu filters, scroll reveals
assets/favicon.svg    Favicon
assets/og.png         Social share image (1200x630)
```

## Notes

- Hours, prices, address and email are placeholders. Hours in `main.js` drive the live open status and today's highlight.
- Photos hotlink from Unsplash. Swap in your own under `assets/` when you have them.
- Deployed with GitHub Pages from `main`.
