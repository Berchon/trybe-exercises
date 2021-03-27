/*
Exercício 4 : Recrie o script do exercício 3 utilizando apenas funções assíncronas.

Dica: utilize a função readdir do módulo fs do Node.js.
*/

const fs = require('fs');

const scriptStart = Date.now();

fs.readdir('./', (err, fileNames) => {
  console.log(`encontrados ${fileNames.length} arquivos`);
  const fileSizes = [];

  function logEnd() {
    if (fileSizes.length === fileNames.length) {
      const fileLengthSum = fileSizes.reduce((total, size) => total + size);
      const scriptTime = Date.now() - scriptStart;

      console.log(`lidos ${fileLengthSum} bytes em ${scriptTime} milissegundos`)
    }
  }

  fileNames.forEach((fileName) => {
    fs.readFile(`./${fileName}`, (err, file) => {
      fileSizes.push(file.byteLength);
      logEnd();
    });
  });
});
