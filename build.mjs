import { copyFile, mkdir } from 'node:fs/promises';

// Mantém a abertura direta pela raiz e prepara uma saída estática para hospedagem.
const output = new URL('./dist/', import.meta.url);
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'style.css', 'script.js'].map(file =>
  copyFile(new URL(file, import.meta.url), new URL(file, output))
));
console.log('Site estático preparado em dist/.');
