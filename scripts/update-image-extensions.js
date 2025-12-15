const fs = require("fs");
const path = require("path");

/**
 * Script to update all image file extensions in source code from .jpg, .jpeg, .png to .webp
 * 
 * Usage: node scripts/update-image-extensions.js
 */

const SRC_DIR = path.join(__dirname, "..", "src");

// File extensions to process
const FILE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

// Image extensions to replace
const IMAGE_EXTENSIONS_TO_REPLACE = [
  /\.jpg"/g,
  /\.jpeg"/g,
  /\.png"/g,
  /\.jpg'/g,
  /\.jpeg'/g,
  /\.png'/g,
  /\.jpg`/g,
  /\.jpeg`/g,
  /\.png`/g,
  /\.jpg\s/g,
  /\.jpeg\s/g,
  /\.png\s/g,
];

// Replacement map - case insensitive
const REPLACEMENTS = [
  // Double quotes
  { from: /\.jpg"/gi, to: '.webp"' },
  { from: /\.jpeg"/gi, to: '.webp"' },
  { from: /\.png"/gi, to: '.webp"' },
  // Single quotes
  { from: /\.jpg'/gi, to: ".webp'" },
  { from: /\.jpeg'/gi, to: ".webp'" },
  { from: /\.png'/gi, to: ".webp'" },
  // Backticks
  { from: /\.jpg`/gi, to: '.webp`' },
  { from: /\.jpeg`/gi, to: '.webp`' },
  { from: /\.png`/gi, to: '.webp`' },
  // With whitespace
  { from: /\.jpg\s/gi, to: '.webp ' },
  { from: /\.jpeg\s/gi, to: '.webp ' },
  { from: /\.png\s/gi, to: '.webp ' },
  // End of string/line
  { from: /\.jpg[,)]/gi, to: '.webp$1' },
  { from: /\.jpeg[,)]/gi, to: '.webp$1' },
  { from: /\.png[,)]/gi, to: '.webp$1' },
];

let stats = {
  filesProcessed: 0,
  filesUpdated: 0,
  totalReplacements: 0,
};

/**
 * Recursively find all source files
 */
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip node_modules and other directories
    if (stat.isDirectory()) {
      if (
        file !== "node_modules" &&
        file !== ".next" &&
        file !== ".git" &&
        file !== "dist" &&
        file !== "build"
      ) {
        findSourceFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (FILE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Update image extensions in a file
 */
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    let fileReplacements = 0;

    // Apply all replacements
    REPLACEMENTS.forEach(({ from, to }) => {
      const matches = content.match(from);
      if (matches) {
        fileReplacements += matches.length;
        content = content.replace(from, to);
      }
    });

    // Write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      stats.filesUpdated++;
      stats.totalReplacements += fileReplacements;
      console.log(`✅ Updated: ${path.relative(SRC_DIR, filePath)} (${fileReplacements} replacements)`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main execution
 */
console.log("🔄 Starting image extension update...\n");
console.log(`📁 Source directory: ${SRC_DIR}\n`);

const sourceFiles = findSourceFiles(SRC_DIR);
console.log(`📦 Found ${sourceFiles.length} source files to process\n`);

sourceFiles.forEach((file) => {
  stats.filesProcessed++;
  updateFile(file);
});

console.log("\n────────────────────────────────────────────────────────────");
console.log("📊 Summary:");
console.log(`   Files processed: ${stats.filesProcessed}`);
console.log(`   Files updated: ${stats.filesUpdated}`);
console.log(`   Total replacements: ${stats.totalReplacements}`);
console.log("\n✨ Done!");

