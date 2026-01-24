// Final push to exceed 2000 names
const fs = require('fs');
const path = require('path');

const lastBatch = [
  // More girls
  { name: 'Genesis', slug: 'genesis-2', gender: 'girl', origin: 'Greek', meaning: 'Beginning', popularity: 185 },
  { name: 'Giulia', slug: 'giulia', gender: 'girl', origin: 'Italian', meaning: 'Youthful', popularity: 485 },
  { name: 'Gwen', slug: 'gwen', gender: 'girl', origin: 'Welsh', meaning: 'Blessed', popularity: 398 },
  { name: 'Hadassah', slug: 'hadassah', gender: 'girl', origin: 'Hebrew', meaning: 'Myrtle tree', popularity: 512 },
  { name: 'Hattie', slug: 'hattie', gender: 'girl', origin: 'English', meaning: 'Ruler of the home', popularity: 425 },
  { name: 'Heaven', slug: 'heaven-2', gender: 'girl', origin: 'English', meaning: 'Paradise', popularity: 385 },
  { name: 'Henley', slug: 'henley-2', gender: 'girl', origin: 'English', meaning: 'High meadow', popularity: 225 },
  { name: 'Hera', slug: 'hera', gender: 'girl', origin: 'Greek', meaning: 'Queen of gods', popularity: 512 },
  { name: 'Hermione', slug: 'hermione', gender: 'girl', origin: 'Greek', meaning: 'Messenger', popularity: 512 },
  { name: 'Hezekiah', slug: 'hezekiah-girl', gender: 'girl', origin: 'Hebrew', meaning: 'God strengthens', popularity: 512 },
  { name: 'Hollis', slug: 'hollis-girl', gender: 'girl', origin: 'English', meaning: 'Near the holly', popularity: 425 },
  { name: 'Imelda', slug: 'imelda', gender: 'girl', origin: 'Spanish', meaning: 'Powerful fighter', popularity: 512 },
  { name: 'Indiana', slug: 'indiana', gender: 'girl', origin: 'American', meaning: 'Land of Indians', popularity: 425 },
  { name: 'Indie', slug: 'indie-girl', gender: 'girl', origin: 'American', meaning: 'Independent', popularity: 345 },
  { name: 'Inez', slug: 'inez', gender: 'girl', origin: 'Spanish', meaning: 'Pure', popularity: 512 },
  { name: 'Ireland', slug: 'ireland', gender: 'girl', origin: 'Irish', meaning: 'From Ireland', popularity: 398 },
  { name: 'Irma', slug: 'irma', gender: 'girl', origin: 'German', meaning: 'Universal', popularity: 512 },
  { name: 'Ivory', slug: 'ivory-2', gender: 'girl', origin: 'English', meaning: 'White', popularity: 345 },
  { name: 'Ivey', slug: 'ivey', gender: 'girl', origin: 'English', meaning: 'Ivy plant', popularity: 398 },
  { name: 'Jacquelyn', slug: 'jacquelyn', gender: 'girl', origin: 'French', meaning: 'Supplanter', popularity: 425 },
  { name: 'Jada', slug: 'jada', gender: 'girl', origin: 'Spanish', meaning: 'Jade', popularity: 225 },
  { name: 'Jemma', slug: 'jemma-2', gender: 'girl', origin: 'English', meaning: 'Precious stone', popularity: 425 },
  { name: 'Joyce', slug: 'joyce-2', gender: 'girl', origin: 'Latin', meaning: 'Lord', popularity: 512 },
  { name: 'Julissa', slug: 'julissa', gender: 'girl', origin: 'Spanish', meaning: 'Youthful', popularity: 398 },
  { name: 'Karsyn', slug: 'karsyn-girl', gender: 'girl', origin: 'American', meaning: 'Son of Carr', popularity: 345 },
  { name: 'Katalina', slug: 'katalina', gender: 'girl', origin: 'Spanish', meaning: 'Pure', popularity: 398 },
  { name: 'Kenzie', slug: 'kenzie-2', gender: 'girl', origin: 'Scottish', meaning: 'Fair one', popularity: 312 },
  { name: 'Kiera', slug: 'kiera-2', gender: 'girl', origin: 'Irish', meaning: 'Dark', popularity: 425 },
  { name: 'Kyla', slug: 'kyla-2', gender: 'girl', origin: 'Gaelic', meaning: 'Narrow', popularity: 398 },
  { name: 'Kylee', slug: 'kylee-2', gender: 'girl', origin: 'Irish', meaning: 'Boomerang', popularity: 345 },
  // More boys
  { name: 'Aarav', slug: 'aarav', gender: 'boy', origin: 'Sanskrit', meaning: 'Peaceful', popularity: 285 },
  { name: 'Abram', slug: 'abram', gender: 'boy', origin: 'Hebrew', meaning: 'Exalted father', popularity: 385 },
  { name: 'Adonis', slug: 'adonis', gender: 'boy', origin: 'Greek', meaning: 'Lord', popularity: 385 },
  { name: 'Ahmad', slug: 'ahmad', gender: 'boy', origin: 'Arabic', meaning: 'Highly praised', popularity: 485 },
  { name: 'Alfonso', slug: 'alfonso', gender: 'boy', origin: 'Spanish', meaning: 'Noble', popularity: 485 },
  { name: 'Amos', slug: 'amos', gender: 'boy', origin: 'Hebrew', meaning: 'Carried by God', popularity: 485 },
  { name: 'Anakin', slug: 'anakin', gender: 'boy', origin: 'American', meaning: 'Warrior', popularity: 385 },
  { name: 'Anders', slug: 'anders', gender: 'boy', origin: 'Scandinavian', meaning: 'Strong', popularity: 385 },
  { name: 'Ander', slug: 'ander', gender: 'boy', origin: 'Basque', meaning: 'Manly', popularity: 425 },
  { name: 'Andre', slug: 'andre-2', gender: 'boy', origin: 'French', meaning: 'Manly', popularity: 345 },
  { name: 'Archie', slug: 'archie', gender: 'boy', origin: 'German', meaning: 'Brave', popularity: 285 },
  { name: 'Ares', slug: 'ares', gender: 'boy', origin: 'Greek', meaning: 'God of war', popularity: 385 },
  { name: 'Armani', slug: 'armani-boy', gender: 'boy', origin: 'Italian', meaning: 'Warrior', popularity: 345 },
  { name: 'Arlo', slug: 'arlo', gender: 'boy', origin: 'English', meaning: 'Fortified hill', popularity: 145 },
  { name: 'Aryan', slug: 'aryan', gender: 'boy', origin: 'Sanskrit', meaning: 'Noble', popularity: 385 },
  { name: 'Atticus', slug: 'atticus', gender: 'boy', origin: 'Greek', meaning: 'From Attica', popularity: 225 },
  { name: 'Ayaan', slug: 'ayaan', gender: 'boy', origin: 'Arabic', meaning: 'Gift of God', popularity: 385 },
  { name: 'Banks', slug: 'banks', gender: 'boy', origin: 'English', meaning: 'Edge of the river', popularity: 385 },
  { name: 'Bear', slug: 'bear-boy', gender: 'boy', origin: 'German', meaning: 'Strong', popularity: 345 },
  { name: 'Bishop', slug: 'bishop', gender: 'boy', origin: 'English', meaning: 'Overseer', popularity: 225 },
  { name: 'Bodie', slug: 'bodie', gender: 'boy', origin: 'Scottish', meaning: 'Blond', popularity: 385 },
  { name: 'Boone', slug: 'boone', gender: 'boy', origin: 'French', meaning: 'Good', popularity: 385 },
  { name: 'Bowie', slug: 'bowie', gender: 'boy', origin: 'Irish', meaning: 'Blond', popularity: 285 },
  { name: 'Brayan', slug: 'brayan', gender: 'boy', origin: 'Irish', meaning: 'Strong', popularity: 385 },
  { name: 'Bridger', slug: 'bridger', gender: 'boy', origin: 'English', meaning: 'Lives near the bridge', popularity: 345 },
  { name: 'Byron', slug: 'byron', gender: 'boy', origin: 'English', meaning: 'Barn for cows', popularity: 425 },
  { name: 'Caiden', slug: 'caiden-2', gender: 'boy', origin: 'American', meaning: 'Fighter', popularity: 225 },
  { name: 'Cain', slug: 'cain-2', gender: 'boy', origin: 'Hebrew', meaning: 'Acquired', popularity: 425 },
  { name: 'Cairo', slug: 'cairo', gender: 'boy', origin: 'Arabic', meaning: 'Victorious', popularity: 345 },
  { name: 'Callum', slug: 'callum-2', gender: 'boy', origin: 'Scottish', meaning: 'Dove', popularity: 345 },
  { name: 'Cannon', slug: 'cannon', gender: 'boy', origin: 'French', meaning: 'Official of the church', popularity: 285 },
  { name: 'Caspian', slug: 'caspian', gender: 'boy', origin: 'English', meaning: 'White', popularity: 385 },
  { name: 'Cedric', slug: 'cedric', gender: 'boy', origin: 'Celtic', meaning: 'Bounty', popularity: 485 },
  { name: 'Creed', slug: 'creed', gender: 'boy', origin: 'Latin', meaning: 'Belief', popularity: 285 },
  { name: 'Crosby', slug: 'crosby', gender: 'boy', origin: 'Irish', meaning: 'Village with crosses', popularity: 385 },
  { name: 'Dash', slug: 'dash', gender: 'boy', origin: 'English', meaning: 'Dweller by the ash tree', popularity: 385 },
  { name: 'Dax', slug: 'dax-2', gender: 'boy', origin: 'French', meaning: 'Water', popularity: 345 },
  { name: 'Deacon', slug: 'deacon', gender: 'boy', origin: 'Greek', meaning: 'Messenger', popularity: 225 },
  { name: 'Dexter', slug: 'dexter', gender: 'boy', origin: 'Latin', meaning: 'Right-handed', popularity: 285 },
  { name: 'Dilan', slug: 'dilan', gender: 'boy', origin: 'Welsh', meaning: 'Sea', popularity: 385 },
  { name: 'Easton', slug: 'easton-2', gender: 'boy', origin: 'English', meaning: 'East town', popularity: 145 },
];

// Read the current data file
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Find the position of "// Final expansion batch"
const insertPoint = content.indexOf('// Final expansion batch to reach 2000+');
if (insertPoint === -1) {
  console.error('Could not find insertion point');
  process.exit(1);
}

// Prepare the new names to insert
const newNamesStr = lastBatch.map(n => {
  const meaningEscaped = n.meaning.replace(/'/g, "\\'");
  return `  { name: '${n.name}', slug: '${n.slug}', gender: '${n.gender}', origin: '${n.origin}', meaning: '${meaningEscaped}', popularity: ${n.popularity} },`;
}).join('\n');

// Insert before the comment
const newContent = content.slice(0, insertPoint) + '// Final push to exceed 2000\n' + newNamesStr + '\n\n  ' + content.slice(insertPoint);

// Write the updated content
fs.writeFileSync(dataFilePath, newContent, 'utf8');

console.log(`Added ${lastBatch.length} final names to the database`);

// Count totals by gender
const girls = lastBatch.filter(n => n.gender === 'girl').length;
const boys = lastBatch.filter(n => n.gender === 'boy').length;
const unisex = lastBatch.filter(n => n.gender === 'unisex').length;
console.log(`- Girl names: ${girls}`);
console.log(`- Boy names: ${boys}`);
console.log(`- Unisex names: ${unisex}`);
