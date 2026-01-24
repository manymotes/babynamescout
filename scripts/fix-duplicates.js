// Script to fix duplicate slugs in data.ts
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

console.log('📖 Reading data.ts file...');
let content = fs.readFileSync(dataPath, 'utf8');

// Extract all name entries
const nameRegex = /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*gender:\s*'([^']+)',\s*origin:\s*'([^']+)',\s*meaning:\s*'([^']*(?:\\'[^']*)*)',\s*popularity:\s*(\d+)\s*\}/g;

const names = [];
let match;
while ((match = nameRegex.exec(content)) !== null) {
  names.push({
    fullMatch: match[0],
    name: match[1],
    slug: match[2],
    gender: match[3],
    origin: match[4],
    meaning: match[5],
    popularity: match[6],
    index: match.index
  });
}

console.log(`📊 Found ${names.length} name entries`);

// Find duplicates
const slugCounts = {};
names.forEach(entry => {
  if (!slugCounts[entry.slug]) {
    slugCounts[entry.slug] = [];
  }
  slugCounts[entry.slug].push(entry);
});

const duplicateSlugs = Object.keys(slugCounts).filter(slug => slugCounts[slug].length > 1);
console.log(`🔍 Found ${duplicateSlugs.length} duplicate slugs`);

// Fix duplicates by adding suffix
let newContent = content;
let offset = 0;

duplicateSlugs.forEach(slug => {
  const entries = slugCounts[slug];
  // Keep the first one as is, add suffix to others
  for (let i = 1; i < entries.length; i++) {
    const entry = entries[i];
    const newSlug = `${slug}-${i + 2}`;
    const oldText = entry.fullMatch;
    const newText = oldText.replace(`slug: '${slug}'`, `slug: '${newSlug}'`);

    const actualIndex = entry.index + offset;
    newContent = newContent.substring(0, actualIndex) + newText + newContent.substring(actualIndex + oldText.length);
    offset += (newText.length - oldText.length);
  }
});

fs.writeFileSync(dataPath, newContent, 'utf8');

console.log(`✅ Fixed ${duplicateSlugs.length} duplicate slugs!`);
console.log(`📝 Each duplicate now has a unique suffix (-2, -3, etc.)`);
