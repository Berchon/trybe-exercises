/*
Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" } .
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json()); // Aqui o body-parser entra convertendo o body para JSON

app.get('/', (req, res) => {
  res.send("Hello world");
});
app.post('/', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
});

app.get('/ping', (req, res) => {
  res.send({ "message": "Pong!" })
});

app.post('/hello', (req, res) => {
  const { name } = req.body
  res.json({ "message": `Hello, ${ name }!` })
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('rodando na clássica 3000'));