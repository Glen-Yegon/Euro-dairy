// minify-all.js
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import minify from "@node-minify/core";
import terser from "@node-minify/terser";
import cleanCSS from "@node-minify/clean-css";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to scan
const folder = __dirname;

// 🧹 Step 1: Remove old .min files
console.log("🧹 Cleaning old minified files...\n");

const oldMinFiles = await glob(`${folder}/**/*.min.@(js|css)`);
for (const file of oldMinFiles) {
  try {
    await fs.remove(file);
    console.log(`❌ Deleted: ${path.relative(folder, file)}`);
  } catch (err) {
    console.error(`Error deleting ${file}:`, err);
  }
}

console.log("✅ Old minified files removed.\n");

// ⚙️ Step 2: Minify CSS and JS files
console.log("⚙️  Starting minification...\n");

const jsFiles = await glob(`${folder}/**/*.js`, { ignore: "**/*.min.js" });
const cssFiles = await glob(`${folder}/**/*.css`, { ignore: "**/*.min.css" });

// JS minification
for (const file of jsFiles) {
  const output = file.replace(".js", ".min.js");
  try {
    await minify({
      compressor: terser,
      input: file,
      output,
      callback: err => {
        if (err) console.error(`❌ Error minifying ${file}:`, err);
        else console.log(`✨ Minified JS: ${path.basename(file)} → ${path.basename(output)}`);
      },
    });
  } catch (e) {
    console.error(`Error with JS file ${file}:`, e);
  }
}

// CSS minification
for (const file of cssFiles) {
  const output = file.replace(".css", ".min.css");
  try {
    await minify({
      compressor: cleanCSS,
      input: file,
      output,
      callback: err => {
        if (err) console.error(`❌ Error minifying ${file}:`, err);
        else console.log(`✨ Minified CSS: ${path.basename(file)} → ${path.basename(output)}`);
      },
    });
  } catch (e) {
    console.error(`Error with CSS file ${file}:`, e);
  }
}

console.log("\n✅ All files successfully minified!");
