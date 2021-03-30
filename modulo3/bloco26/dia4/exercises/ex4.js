/*
Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } . Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 . Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401 ;
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200).send({ "message": `Hello, ${ name }!` });
  } else {
    res.status(401).send({ "message": "Unauthorized" });
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('rodando na clássica 3000'));
