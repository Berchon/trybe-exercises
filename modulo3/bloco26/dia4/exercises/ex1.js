/*
Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos.
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
