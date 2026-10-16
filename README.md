# Kiln Coffee Roasters

Website for Kiln, an independent coffee roastery and bakery on Merchant Lane, Liverpool.

A static site: plain HTML, with Tailwind CSS and Google Fonts loaded from CDNs. There is no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Structure

```
index.html   Homepage
assets/      Images and other static files (add as needed)
```

## Notes

- The Tailwind Play CDN script is fine for development but not recommended for production. Before launch, switch to a compiled Tailwind stylesheet.
- Photos currently hotlink from Unsplash. Replace them with Kiln's own photos in `assets/`.
