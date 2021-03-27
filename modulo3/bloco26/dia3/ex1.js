/*
Exercício 1 : Utilizando apenas funções síncronas, crie um script que leia dois arquivos e:
  1. Escreva, no terminal, para cada arquivo, qual foi o tempo necessário para lê-lo do disco;
  2. Escreva, no terminal, para cada arquivo, seu tamanho em bytes;
  3. Escreva, no terminal, ao final do processo, qual o tempo total necessário para a execução completa do script.

Dica: utilize a função readFileSync do módulo fs do Node.js.
*/

const fs = require('fs');

const startScript = Date.now();

const startFile1 = Date.now();
const file1 = fs.readFileSync('./text1.txt');
const finishFile1 = Date.now();
const timeReadFile1 = finishFile1 - startFile1;

const startFile2 = Date.now();
const file2 = fs.readFileSync('./text2.txt');
const finishFile2 = Date.now();
const timeReadFile2 = finishFile2 - startFile2;

const finishScript = Date.now();

const timeRunScript = finishScript - startScript;

console.log(`text1.txt: lidos ${file1.byteLength} bytes em ${timeReadFile1} milissegundos`);
console.log(`text2.txt: lidos ${file2.byteLength} bytes em ${timeReadFile2} milissegundos`);
console.log(`script concluído em ${timeRunScript} milissegundos`);
