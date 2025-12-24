const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
const basePath = process.env.BASE_PATH || '/animal-game/';

console.log('Fixing base path in index.html...');

let html = fs.readFileSync(indexPath, 'utf8');

// Add base tag if it doesn't exist
if (!html.includes('<base')) {
  html = html.replace(
    '<head>',
    `<head>\n    <base href="${basePath}">`
  );

  fs.writeFileSync(indexPath, html, 'utf8');
  console.log(`✓ Added <base href="${basePath}"> to index.html`);
} else {
  console.log('Base tag already exists, skipping...');
}
