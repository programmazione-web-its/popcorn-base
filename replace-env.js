// replace-env.js
const fs = require("fs");
const path = require("path");

// Percorso del file environment.prod.ts
const envProdFilePath = path.resolve(__dirname, "src/envs/env.prod.ts");

// Leggi il contenuto del file environment.prod.ts
let content = fs.readFileSync(envProdFilePath, "utf-8");

// Ottieni il valore della variabile di ambiente NG_APP_BEARER_TOKEN (da Vercel o locale)
const apiToken = process.env.NG_APP_BEARER_TOKEN || ""; // Usa un valore di default se non è presente

// Debug: Stampa il valore della variabile di ambiente per assicurarti che sia corretto
console.log("API Token:", apiToken);

// Sostituisci la stringa 'process.env.NG_APP_BEARER_TOKEN' con il valore della variabile di ambiente
content = content.replace(
  "process.env.NG_APP_BEARER_TOKEN", // Cerca la stringa con le virgolette
  `'${apiToken}'` // Sostituisci con il valore della variabile d'ambiente
);

// Scrivi il contenuto modificato nel file
fs.writeFileSync(envProdFilePath, content);

console.log("File environment.prod.ts aggiornato con il token API.");
