import fs from "fs";
import path from "path";

// -------- CONFIG --------
const sourceDir = "E:/other/CGAxis_textures"; // Folder to scan

// Your Vue project's products folder:
const productsPath =
  "C:/Users/iosif/Desktop/Full-stack/fullstack-e-comerce EazyBytes/vue-frontend/e-com/src/assets/products/";

// Output JSON file:
const outputJson = path.join(productsPath, "products.json");
// ------------------------

let itemGenerator = [];

function randomPrice(min = 10, max = 50) {
  const p = Math.random() * (max - min) + min;
  return Number(p.toFixed(2));
}
function cleanName(raw) {
  return raw
    .replace(/render/gi, "")       // remove "render"
    .replace(/\d+/g, "")           // remove all numbers
    .replace(/[_-]+/g, " ")        // underscores/dashes → spaces
    .replace(/\s+/g, " ")          // collapse multiple spaces
    .trim()                        // remove leading/trailing spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // title case
}
function cleanCategory(raw) {
  return raw
    .replace(/^4k_/i, "")          // remove leading "4k_"
    .replace(/[_-]+/g, " ")        // underscores → spaces
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case
}



function scanFolder(folderPath) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(folderPath, file.name);

    if (file.isDirectory()) {
      scanFolder(fullPath);
    } else {
      // Only process files containing "render"
      if (!file.name.toLowerCase().includes("render")) continue;

      // ---- CATEGORY (folder structure under sourceDir) ----
      const relativeParts = path
        .relative(sourceDir, folderPath)
        .split(path.sep)
        .filter(Boolean);

      let rawCategory = relativeParts.length > 0 ? relativeParts[0] : "Uncategorized";

      let category = cleanCategory(rawCategory);

      // ---- NAME (before "_pbr") ----
      const filenameNoExt = file.name.replace(/\.[^/.]+$/, "");
      const idx = filenameNoExt.toLowerCase().indexOf("_pbr");

      let rawName =
        idx !== -1 ? filenameNoExt.slice(0, idx) : filenameNoExt;

      // Make the name clean & readable
      let name = cleanName(rawName);

      // ---- PRICE ----
      const price = randomPrice(10, 50);

      // ---- IMAGE PATH ----
      const outputImagePath =
        productsPath + file.name; // same name, you can adjust if needed

      // Push to JSON array
      itemGenerator.push({
        name,
        category,
        price,
        image: outputImagePath,
      });

      // Also copy the file into the products folder
      fs.copyFileSync(fullPath, outputImagePath);

      console.log("Added:", name, "|", category);
    }
  }
}

// Start
scanFolder(sourceDir);

// Save JSON file
fs.writeFileSync(outputJson, JSON.stringify(itemGenerator, null, 2), "utf8");

console.log(`\n✔ DONE! Saved ${itemGenerator.length} items to:`);
console.log(outputJson);
