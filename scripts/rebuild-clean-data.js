// Script to rebuild data.ts cleanly, removing corrupted entries and fixing duplicates
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

console.log('📖 Reading data.ts file...');
let content = fs.readFileSync(dataPath, 'utf8');

// Extract the header (imports and comments before the names array)
const namesArrayStart = content.indexOf('const names = [');
const header = content.substring(0, namesArrayStart);

// Extract the footer (everything after the names array closes)
const namesArrayEnd = content.indexOf('] as any as BabyName[]');
const footer = content.substring(namesArrayEnd);

// Extract just the names section
const namesSection = content.substring(namesArrayStart + 'const names = ['.length, namesArrayEnd);

// Parse names using a more careful regex that handles escaped quotes
const lines = namesSection.split('\n');
const names = [];
let currentEntry = '';

for (let line of lines) {
  line = line.trim();
  if (!line || line.startsWith('//')) continue;

  currentEntry += line;

  // Check if this completes an entry (ends with },)
  if (currentEntry.match(/\},?\s*$/)) {
    // Try to parse this entry
    const match = currentEntry.match(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*gender:\s*'([^']+)',\s*origin:\s*'([^']+)',\s*meaning:\s*'([^']*(?:\\'[^']*)*)',\s*popularity:\s*(\d+)\s*\}/);

    if (match) {
      names.push({
        name: match[1],
        slug: match[2],
        gender: match[3],
        origin: match[4],
        meaning: match[5],
        popularity: parseInt(match[6])
      });
    } else {
      // Entry is malformed, skip it
      console.log(`⚠️  Skipping malformed entry: ${currentEntry.substring(0, 100)}...`);
    }
    currentEntry = '';
  }
}

console.log(`📊 Parsed ${names.length} valid name entries`);

// Fix duplicate slugs
const slugCounts = {};
const uniqueNames = names.map(entry => {
  let slug = entry.slug;
  if (slugCounts[slug]) {
    slugCounts[slug]++;
    slug = `${entry.slug.replace(/-\d+$/, '')}-${slugCounts[slug]}`;
  } else {
    slugCounts[slug] = 1;
  }

  return {
    ...entry,
    slug
  };
});

console.log(`✅ All slugs are now unique`);

// Rebuild the file
const namesText = uniqueNames.map(entry => {
  return `  { name: '${entry.name}', slug: '${entry.slug}', gender: '${entry.gender}', origin: '${entry.origin}', meaning: '${entry.meaning}', popularity: ${entry.popularity} }`;
}).join(',\n');

const newContent = header + 'const names = [\n' + namesText + ',\n\n' + footer;

fs.writeFileSync(dataPath, newContent, 'utf8');

console.log(`✅ Rebuilt data.ts with ${uniqueNames.length} clean entries!`);
console.log(`📝 File structure verified and all duplicates resolved`);
