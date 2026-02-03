// Script to trim names to stay under Cloudflare's 20k file limit
// Target: ~2,000 names to generate ~19k files
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

console.log('📖 Reading data.ts file...');
let content = fs.readFileSync(dataPath, 'utf8');

// Extract header, names section, and footer
const namesArrayStart = content.indexOf('const names = [');
const header = content.substring(0, namesArrayStart);
const namesArrayEnd = content.indexOf('] as any as BabyName[]');
const footer = content.substring(namesArrayEnd);
const namesSection = content.substring(namesArrayStart + 'const names = ['.length, namesArrayEnd);

// Parse names
const lines = namesSection.split('\n');
const names = [];
let currentEntry = '';

for (let line of lines) {
  line = line.trim();
  if (!line || line.startsWith('//')) continue;

  currentEntry += line;

  if (currentEntry.match(/\},?\s*$/)) {
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
    }
    currentEntry = '';
  }
}

console.log(`📊 Current: ${names.length} names`);

// Sort by popularity and keep top 2000
const sortedNames = names.sort((a, b) => a.popularity - b.popularity);
const trimmedNames = sortedNames.slice(0, 2000);

console.log(`✂️  Trimming to top 2000 most popular names`);

// Rebuild file
const namesText = trimmedNames.map(entry => {
  return `  { name: '${entry.name}', slug: '${entry.slug}', gender: '${entry.gender}', origin: '${entry.origin}', meaning: '${entry.meaning}', popularity: ${entry.popularity} }`;
}).join(',\n');

const newContent = header + 'const names = [\n' + namesText + ',\n\n' + footer;

fs.writeFileSync(dataPath, newContent, 'utf8');

console.log(`✅ Trimmed to ${trimmedNames.length} names (removed ${names.length - trimmedNames.length})`);
console.log(`📝 Kept most popular names based on popularity ranking`);
