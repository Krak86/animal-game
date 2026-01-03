const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read homepage from package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const homepage = packageJson.homepage || '/';

console.log(`Building web app for: ${homepage}`);

// Run expo export (environment variables and base path will be handled by fix-base-path.js)
try {
  execSync('expo export --platform web', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });

  console.log('\n✓ Expo build completed');

  // Run the fix-base-path script
  require('./fix-base-path.js');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
