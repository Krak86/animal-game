const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
const packageJsonPath = path.join(__dirname, '..', 'package.json');

// Read base path from package.json homepage field, or env var, or default
let basePath = '/animal-game/';
try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  basePath = packageJson.homepage || basePath;
} catch (error) {
  console.warn('Could not read package.json, using default base path');
}

// Allow environment variable to override
basePath = process.env.BASE_PATH || basePath;

console.log(`Fixing base path in index.html (using: ${basePath})...`);

let html = fs.readFileSync(indexPath, 'utf8');

// Add or uncomment base tag
if (html.includes('<!-- <base href=')) {
  // Uncomment if it was commented out
  html = html.replace('<!-- <base href=', '<base href=');
  html = html.replace('<!-- Disabled for local file:// support -->', '');
  console.log(`✓ Uncommented <base href="${basePath}"> in index.html`);
} else if (!html.includes('<base')) {
  // Add if it doesn't exist
  html = html.replace(
    '<head>',
    `<head>\n    <base href="${basePath}">`
  );
  console.log(`✓ Added <base href="${basePath}"> to index.html`);
} else {
  console.log('Base tag already exists, keeping it...');
}

// Add OG meta tags if they don't exist
console.log('Adding OG meta tags...');

const metaTags = `
    <!-- Primary Meta Tags -->
    <meta name="title" content="Animal Explorer - Educational Game for Kids" />
    <meta name="description" content="An interactive educational game for children to learn animal names and sounds in English, Ukrainian, and Russian. Features fun game modes including find by name, find by sound, and memory pairs." />
    <meta name="keywords" content="educational game, children, kids, animals, learning, sounds, multilingual, English, Ukrainian, Russian, memory game" />
    <meta name="author" content="Animal Explorer Team" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${basePath}" />
    <meta property="og:title" content="Animal Explorer - Educational Game for Kids" />
    <meta property="og:description" content="Learn animal names and sounds in three languages through fun interactive games. Perfect for children's education!" />
    <meta property="og:image" content="${basePath}og-image.png" />
    <meta property="og:site_name" content="Animal Explorer" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${basePath}" />
    <meta property="twitter:title" content="Animal Explorer - Educational Game for Kids" />
    <meta property="twitter:description" content="Learn animal names and sounds in three languages through fun interactive games. Perfect for children's education!" />
    <meta property="twitter:image" content="${basePath}og-image.png" />
`;

if (!html.includes('og:title')) {
  // Update the title tag
  html = html.replace(
    '<title>animals-game</title>',
    '<title>Animal Explorer - Educational Game for Kids</title>'
  );

  // Insert meta tags after viewport meta tag
  html = html.replace(
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />',
    `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />${metaTags}`
  );

  console.log('✓ Added OG meta tags to index.html');
} else {
  console.log('OG meta tags already exist, skipping...');
}

// Convert absolute script paths to relative (for GitHub Pages subdirectory deployment)
console.log('\nConverting absolute paths to relative...');
html = html.replace(/src="\/_expo\//g, 'src="_expo/');
html = html.replace(/href="\/favicon/g, 'href="favicon');
console.log('✓ Converted /_expo/ to _expo/ and /favicon to favicon');

fs.writeFileSync(indexPath, html, 'utf8');

// Copy OG image to dist folder
console.log('\nCopying OG image to dist folder...');
const ogImageSrc = path.join(__dirname, '..', 'assets', 'og-image.png');
const ogImageDest = path.join(__dirname, '..', 'dist', 'og-image.png');

if (fs.existsSync(ogImageSrc)) {
  fs.copyFileSync(ogImageSrc, ogImageDest);
  console.log('✓ Copied og-image.png to dist/');
} else {
  console.log('⚠ Warning: og-image.png not found in assets/');
}
