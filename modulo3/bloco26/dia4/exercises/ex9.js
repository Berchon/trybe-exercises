/*
Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
O corpo da requisição deve receber os campos id e name ;
Bônus : A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400 .
*/

const express = require('express');
const app = express();

app.use(express.json()); // Aqui o body-parser entra convertendo o body para JSON

const fs = require('fs').promises;

const writeSimpsonsFile = async (content) => (
  fs.writeFile('./simpsons.json', JSON.stringify(content), (err) => {
    if (err) throw err;
  })
);

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

app.post('/simpsons', async (req, res, next) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: "Você deve informar o ID e o Nome!" });
  }

  const result = await readSimpsonsFile();
  if(result.find(person => person.id === id)) {
    return res.status(400).json({ message: "ID do personagem já cadastrado!" });
  }

  await writeSimpsonsFile([...result, { id, name }]);
  res.status(200).json({ message: "Personagem cadastrado!" });
  
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
