# Web Deployment Configuration

## Changing the Base Path

The base path (subdirectory) for your web app is configured in `package.json`:

```json
{
  "homepage": "/animal-game/"
}
```

### To Deploy to a Different Path:

**Example 1: Deploy to root** (e.g., `https://example.com/`)
```json
{
  "homepage": "/"
}
```

**Example 2: Deploy to different subdirectory** (e.g., `https://example.com/my-app/`)
```json
{
  "homepage": "/my-app/"
}
```

**Example 3: Deploy to custom domain**
```json
{
  "homepage": "https://animals.example.com/"
}
```

### Override with Environment Variable:

You can also override at build time:
```bash
BASE_PATH="/my-custom-path/" npm run build:web
```

### Priority Order:
1. Environment variable `BASE_PATH` (highest priority)
2. `package.json` → `homepage` field
3. Default: `/animal-game/`

---

## GitHub Pages Setup

For GitHub Pages at `https://username.github.io/repo-name/`:

1. Set `homepage` in `package.json`:
   ```json
   {
     "homepage": "/repo-name/"
   }
   ```

2. Build:
   ```bash
   npm run build:web
   ```

3. The script automatically:
   - ✅ Adds base tag with your homepage path
   - ✅ Converts absolute paths to relative
   - ✅ Adds OG meta tags
   - ✅ Copies OG image

4. Commit and push the `dist` folder

---

## Current Configuration

- **Base Path**: `/animal-game/`
- **GitHub Pages URL**: `https://krak86.github.io/animal-game/`

To change the app name, just update the `homepage` field in `package.json` and rebuild!
