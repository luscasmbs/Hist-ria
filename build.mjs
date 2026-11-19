import { copyFile, cp, mkdir } from 'node:fs/promises';

// Mantém a abertura direta pela raiz e prepara uma saída estática para hospedagem.
const output = new URL('./dist/', import.meta.url);
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'style.css', 'script.js'].map(file =>
  copyFile(new URL(file, import.meta.url), new URL(file, output))
));
await cp(new URL('./assets/', import.meta.url), new URL('assets/', output), { recursive: true });
await cp(new URL('./data/', import.meta.url), new URL('data/', output), { recursive: true });
console.log('Site estático preparado em dist/.');
