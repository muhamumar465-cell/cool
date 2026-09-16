# Broken Links Fixed in index.html

## Summary
Fixed all broken JavaScript and CSS file references in index.html that were pointing to non-existent files due to hash-based filenames from the build process.

## Changes Made

### JavaScript Files
1. `index.js` → `index-D8pI1TRv.js` (2 occurrences: lines 7 and 20)
2. `rolldown.js` → `rolldown-runtime-C60lm6uB.js` (line 8)
3. `framework.js` → `framework-D_rUT4EX.js` (line 10)
4. `layout.js` → `layout-segment-context-DQGHwY3i.js` (line 12)
5. `page.js` → `page-1qMgSgmG.js` (line 13)
6. `index.js` → `index-D8pI1TRv.js` (line 237 - in script tag with id="_R_")

### CSS Files
- `styles.css` reference was already correct (line 6)

## Verification
After the changes, all HTML link and script tags now reference files that exist in the directory:
- index-D8pI1TRv.js ✓
- rolldown-runtime-C60lm6uB.js ✓
- framework-D_rUT4EX.js ✓
- layout-segment-context-DQGHwY3i.js ✓
- page-1qMgSgmG.js ✓
- styles.css ✓

## Remaining References
The following references remain unchanged as they may be intended for deployment or handled differently by the framework:
- `/favicon.svg` (lines 15-16)
- `/brand/spacify-logo.png` (lines 27, 115)
- CSS references in JavaScript strings (lines 248-249) pointing to `/_next/static/css/index.Cg_tzbpZ.css`

These would need to be addressed separately if local development requires them, potentially by:
1. Creating the necessary directories and files, or
2. Configuring a development server to serve these assets, or
3. Adjusting the paths to match the local file structure if the files exist elsewhere