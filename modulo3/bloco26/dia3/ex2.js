/*
Exercício 2 : Crie um script que realize as mesmas funcionalidades que o script do exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois arquivos sejam lidos ao mesmo tempo.

Dica: utilize a função readFile do módulo fs do Node.js.
*/

const fs = require('fs').promises;

async function read(filename, timeMiliseconds) {
  const text = await fs.readFile(filename, 'utf-8')
    .then(text => (text))
    .catch(new Error("Erro ao ler o arquivo"));
  
  const deltaTime = Date.now() - timeMiliseconds;
  return ({
    byteLength: text.length,
    timeReadFile: deltaTime,
  });
}

async function run() {
  const startScript = Date.now();
  
  const file1 = await read('./text1.txt', Date.now())
  const file2 = await read('./text2.txt', Date.now())
  
  const finishScript = Date.now();
  
  const timeRunScript = finishScript - startScript;
  
  console.log(`text1.txt: lidos ${file1.byteLength} bytes em ${file1.timeReadFile} milissegundos`);
  console.log(`text2.txt: lidos ${file2.byteLength} bytes em ${file1.timeReadFile} milissegundos`);
  console.log(`script concluído em ${timeRunScript} milissegundos`);

};

run();
