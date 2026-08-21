import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distIndex = resolve("dist", "index.html");
const dist404 = resolve("dist", "404.html");

if (existsSync(distIndex)) {
  copyFileSync(distIndex, dist404);
  console.log("Successfully copied dist/index.html to dist/404.html");
} else {
  console.error("Error: dist/index.html not found. Please ensure Vite built successfully before running copy-404.");
  process.exit(1);
}
