/*
Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
*/

const express = require('express');
const app = express();

const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const content = await fs.readFile('./simpsons.json');
  return JSON.parse(content.toString('utf-8'));
};

app.get('/simpsons', async (_req, res) => {
  const result = await readSimpsonsFile();
  res.status(200).send(result);
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
