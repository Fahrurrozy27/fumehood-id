const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'galeri-fumehood');
const destDir = path.join(__dirname, '..', 'public', 'images', 'fumehood');

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (err) {
    console.error('Error: "sharp" is not installed. Please run "npm install -D sharp" first.');
    process.exit(1);
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }

  // Read files from source directory
  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} files in source directory.`);

  let index = 1;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
      const srcPath = path.join(srcDir, file);
      const destName = `fumehood-${index}.webp`;
      const destPath = path.join(destDir, destName);

      console.log(`Compressing ${file} -> ${destName}...`);
      try {
        await sharp(srcPath)
          .webp({ quality: 80 }) // 80 quality offers great compression vs details
          .toFile(destPath);
        console.log(`Successfully saved to ${destPath}`);
        index++;
      } catch (err) {
        console.error(`Failed to compress ${file}:`, err);
      }
    }
  }

  console.log(`All done! ${index - 1} images compressed and saved.`);
}

main().catch(err => {
  console.error('Unhandled rejection:', err);
});
