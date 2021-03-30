/*
Caso algum endpoint que não consta nessa lista receba uma requisição, a resposta deve voltar com status 404 Not Found , sem corpo.
*/

const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (_req, res) => {
  res.status(200).send("OK");
});

app.use('*', (_req, res) => {
  res.status(404).json({ message: "endpoint não existe!" });
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));