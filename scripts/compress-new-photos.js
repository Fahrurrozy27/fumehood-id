const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('Error: "sharp" is not installed. Please run "npm install -D sharp" first.');
  process.exit(1);
}

const srcDir = path.join(__dirname, '..', 'new-photo');
const publicDir = path.join(__dirname, '..', 'public', 'images');

const dirs = {
  sectionA: path.join(publicDir, 'section-a'),
  sectionB: path.join(publicDir, 'section-b'),
  sectionC: path.join(publicDir, 'section-c'),
  glossary: path.join(publicDir, 'glossary'),
};

// Create dirs if they don't exist
for (const key in dirs) {
  if (!fs.existsSync(dirs[key])) {
    fs.mkdirSync(dirs[key], { recursive: true });
    console.log(`Created directory: ${dirs[key]}`);
  }
}

async function compressImage(srcPath, destPath, quality = 82) {
  try {
    await sharp(srcPath)
      .webp({ quality })
      .toFile(destPath);
    console.log(`Saved compressed image: ${destPath}`);
  } catch (err) {
    console.error(`Failed to compress ${srcPath} -> ${destPath}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(srcDir)) {
    console.error(`Source directory does not exist: ${srcDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} files in source directory: ${srcDir}`);

  // Mappings for glossary
  const glossaryMap = {
    'Section A (9).jpg': 'blower.webp',
    'Section A (5).jpg': 'sash.webp',
    'logo sefa.webp': 'sefa.webp',
    'Section C (10).jpg': 'smoke-test.webp',
    'Section A (2).jpg': 'ducting.webp'
  };

  // Process glossary first
  console.log("\nProcessing glossary images...");
  for (const [srcName, destName] of Object.entries(glossaryMap)) {
    const srcPath = path.join(srcDir, srcName);
    const destPath = path.join(dirs.glossary, destName);
    if (fs.existsSync(srcPath)) {
      await compressImage(srcPath, destPath, 85);
    } else {
      console.warn(`Glossary source photo not found: ${srcName}`);
    }
  }

  // Group gallery files for Section A, Section B, and Section C to avoid duplicates
  const galleryGroups = { A: {}, B: {}, C: {} };

  files.forEach(file => {
    // Matches like "Section A (2).jpg", "Section A.jpg", "Section C.jpeg"
    const match = file.match(/^Section\s+([A-C])\s*\(?(\d+)?\)?\.(jpe?g|jpg|png|webp)$/i);
    if (match) {
      const section = match[1].toUpperCase();
      const numStr = match[2] || 'main';
      
      const filePath = path.join(srcDir, file);
      const stats = fs.statSync(filePath);
      
      // If we haven't seen this number or if the current file is larger (better resolution)
      if (!galleryGroups[section][numStr] || stats.size > galleryGroups[section][numStr].size) {
        galleryGroups[section][numStr] = {
          file,
          path: filePath,
          size: stats.size
        };
      }
    }
  });

  // Process each section and assign consecutive clean names
  for (const section of ['A', 'B', 'C']) {
    console.log(`\nProcessing Section ${section} gallery...`);
    const sectionKey = `section${section}`;
    const items = Object.entries(galleryGroups[section]);
    
    // Sort items so 'main' is first, then numerical order
    items.sort((a, b) => {
      if (a[0] === 'main') return -1;
      if (b[0] === 'main') return 1;
      return parseInt(a[0], 10) - parseInt(b[0], 10);
    });

    let index = 1;
    for (const [numStr, info] of items) {
      const destName = `section-${section.toLowerCase()}-${index}.webp`;
      const destPath = path.join(dirs[sectionKey], destName);
      await compressImage(info.path, destPath, 80);
      index++;
    }
  }

  console.log("\nAll image compressions completed!");
}

main().catch(err => {
  console.error('Unhandled rejection:', err);
});
