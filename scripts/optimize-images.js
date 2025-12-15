const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

/**
 * Image optimization script
 * Converts all JPG, JPEG, PNG images to WebP format with compression
 * 
 * Usage: node scripts/optimize-images.js [--backup] [--quality=80]
 * 
 * Options:
 *   --backup: Creates backup of original images in public/images-backup/
 *   --quality: WebP quality (0-100, default: 80)
 */

const args = process.argv.slice(2);
const shouldBackup = args.includes("--backup");
const qualityArg = args.find((arg) => arg.startsWith("--quality="));
const quality = qualityArg
  ? parseInt(qualityArg.split("=")[1])
  : 80;

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const BACKUP_DIR = shouldBackup
  ? path.join(PUBLIC_DIR, "images-backup")
  : null;

// Supported image formats
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

// Stats
let stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  totalOriginalSize: 0,
  totalWebPSize: 0,
};

/**
 * Recursively find all image files
 */
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, fileList);
    } else {
      const ext = path.extname(file);
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Create backup of original image
 */
function backupImage(filePath) {
  if (!shouldBackup) return;

  const relativePath = path.relative(IMAGES_DIR, filePath);
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupDir = path.dirname(backupPath);

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // Copy original file
  fs.copyFileSync(filePath, backupPath);
}

/**
 * Convert image to WebP
 */
async function convertToWebP(filePath) {
  try {
    const ext = path.extname(filePath);
    const webpPath = filePath.replace(ext, ".webp");

    // Skip if WebP already exists
    if (fs.existsSync(webpPath)) {
      console.log(`⏭️  Skipped (WebP exists): ${path.relative(PUBLIC_DIR, filePath)}`);
      stats.skipped++;
      return;
    }

    // Get original file size
    const originalStats = fs.statSync(filePath);
    stats.totalOriginalSize += originalStats.size;

    // Create backup if requested
    if (shouldBackup) {
      backupImage(filePath);
    }

    // Convert to WebP with compression
    await sharp(filePath)
      .webp({ quality, effort: 6 }) // effort: 0-6, higher = better compression but slower
      .toFile(webpPath);

    // Get WebP file size
    const webpStats = fs.statSync(webpPath);
    stats.totalWebPSize += webpStats.size;

    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    const webpSizeKB = (webpStats.size / 1024).toFixed(2);
    const savings = (
      ((originalStats.size - webpStats.size) / originalStats.size) *
      100
    ).toFixed(1);

    console.log(
      `✅ Converted: ${path.relative(PUBLIC_DIR, filePath)} → ${path.relative(PUBLIC_DIR, webpPath)} (${originalSizeKB}KB → ${webpSizeKB}KB, -${savings}%)`
    );

    stats.converted++;
  } catch (error) {
    console.error(
      `❌ Error converting ${path.relative(PUBLIC_DIR, filePath)}:`,
      error.message
    );
    stats.errors++;
  }
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting image optimization...\n");
  console.log(`📁 Source directory: ${IMAGES_DIR}`);
  if (shouldBackup) {
    console.log(`💾 Backup directory: ${BACKUP_DIR}`);
  }
  console.log(`🎨 Quality: ${quality}`);
  console.log("─".repeat(60));

  // Create backup directory if needed
  if (shouldBackup && !fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`📦 Created backup directory: ${BACKUP_DIR}\n`);
  }

  // Find all images
  const images = findImages(IMAGES_DIR);
  stats.total = images.length;

  console.log(`📸 Found ${images.length} images to process\n`);

  // Process images sequentially to avoid overwhelming the system
  for (const imagePath of images) {
    await convertToWebP(imagePath);
  }

  // Print summary
  console.log("\n" + "─".repeat(60));
  console.log("📊 Summary:");
  console.log(`   Total images: ${stats.total}`);
  console.log(`   ✅ Converted: ${stats.converted}`);
  console.log(`   ⏭️  Skipped: ${stats.skipped}`);
  console.log(`   ❌ Errors: ${stats.errors}`);

  if (stats.converted > 0) {
    const totalOriginalMB = (stats.totalOriginalSize / 1024 / 1024).toFixed(2);
    const totalWebPMB = (stats.totalWebPSize / 1024 / 1024).toFixed(2);
    const totalSavings = (
      ((stats.totalOriginalSize - stats.totalWebPSize) /
        stats.totalOriginalSize) *
      100
    ).toFixed(1);

    console.log(`\n💾 Size reduction:`);
    console.log(`   Original: ${totalOriginalMB} MB`);
    console.log(`   WebP: ${totalWebPMB} MB`);
    console.log(`   Savings: ${totalSavings}% (${(totalOriginalMB - totalWebPMB).toFixed(2)} MB)`);
  }

  console.log("\n✨ Done!");
}

// Run the script
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

