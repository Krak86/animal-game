# OG Image Setup

## Current Status
A placeholder OG image has been created at `og-image.svg` (1200x630px).

## To Replace with Your Custom Image

### Option 1: Convert the SVG to PNG
Use any of these methods:

**Online Tools:**
- https://svgtopng.com/
- https://cloudconvert.com/svg-to-png

**Command Line (if you have ImageMagick installed):**
```bash
magick convert og-image.svg -resize 1200x630 og-image.png
```

**Command Line (if you have Inkscape installed):**
```bash
inkscape og-image.svg --export-filename=og-image.png --export-width=1200 --export-height=630
```

### Option 2: Create Your Own PNG
1. Create a PNG image with dimensions **1200x630 pixels** (Facebook recommended)
2. Save it as `og-image.png` in the `assets` folder
3. Include:
   - App name/logo
   - Brief description
   - Appealing visuals (animal images/emojis)
   - Bright, eye-catching colors

### Option 3: Alternative Dimensions
If needed, you can also use:
- 1200x1200px (square, works well for both Facebook and Twitter)
- Minimum: 600x315px

## After Creating the PNG
1. Place `og-image.png` in the `assets` folder
2. Rebuild your web app: `npm run build:web`
3. Test your OG tags using:
   - https://www.opengraph.xyz/
   - https://cards-dev.twitter.com/validator
   - Facebook Sharing Debugger

## Current Meta Tags
The following OG meta tags have been configured in `app.json`:
- og:title
- og:description
- og:image
- og:type
- og:site_name
- twitter:card
- twitter:title
- twitter:description
- twitter:image

You can customize these in `app.json` under `expo.web.meta`.
