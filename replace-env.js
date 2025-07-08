// replace-env.js
const fs = require("fs");
const path = require("path");

// Leggi il file environment.prod.ts
const envProdFilePath = path.resolve(__dirname, "src/envs/env.prod.ts");

// Leggi il contenuto del file environment.prod.ts
let content = fs.readFileSync(envProdFilePath, "utf-8");

// Sostituisci il token con la variabile di ambiente fornita da Vercel
const apiToken = process.env.NG_APP_BEARER_TOKEN || ""; // Puoi sostituire con un valore di default
content = content.replace("process.env.NG_APP_BEARER_TOKEN", `'${apiToken}'`);

// Scrivi il contenuto modificato nel file
fs.writeFileSync(envProdFilePath, content);
