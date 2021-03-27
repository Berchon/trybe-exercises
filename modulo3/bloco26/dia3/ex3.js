/*
Exercício 3 : Crie um script NodeJS que, utilizando apenas funções síncronas e módulos padrão do NodeJS, receba o nome de uma pasta e:
  1. Escreva a quantidade de arquivos existentes dentro dela;
  2. Escreva a soma do tamanho de todos os arquivos presentes nela;
  3. Escreva no terminal o tempo total de execução do script.

  Dica: utilize a função readdirSync do módulo fs do Node.js.
*/

const fs = require('fs');

const scriptStart = Date.now();

const fileNames = fs.readdirSync('./');

console.log(`encontrados ${fileNames.length} arquivos`);

let fileSizeTotal = 0;

for (const fileName of fileNames) {
  const file = fs.readFileSync(`./${fileName}`);
  fileSizeTotal += file.byteLength;
}

console.log(`tamanho total dos arquivos: ${fileSizeTotal} bytes`);

const scriptTime = Date.now() - scriptStart;
console.log(`script concluído em ${scriptTime} milissegundos`);
