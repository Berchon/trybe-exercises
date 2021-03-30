/*
Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json()); // Aqui o body-parser entra convertendo o body para JSON

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
    res.status(200).send({ "message": `Seu nome é ${ name } e você tem anos ${ age } de idade` });
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('rodando na clássica 3000'));
