/*
Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
*/

const express = require('express');
const app = express();

const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const content = await fs.readFile('./simpsons.json');
  return JSON.parse(content.toString('utf-8'));
};

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const result = await readSimpsonsFile();
  const person = result.find(person => person.id === id)
  res.status(200).send(person);
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
