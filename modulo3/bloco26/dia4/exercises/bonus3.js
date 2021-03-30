/*
O caminho do endpoint de autenticação deve ser /signup .
- As requisições para esse endpoint deverão utilizar o método POST e devem receber, no corpo da requisição, os campos email , password , firstName e phone .
- Caso todos os requisitos acima sejam atendidos, um token aleatório, composto por letras e números, com 16 caracteres, deve ser retornado. Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:

----
generate-token.js
const crypto = require('crypto');

function generateToken () {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
----

A resposta da requisição deve ser um objeto com o formato { token: <novo-token-gerado> }.
*/

const express = require('express');
const app = express();

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.use(express.json());

app.post('/signup', (req, res) => {
  const validateData = body => {
    return body.email && body.password && body.firstName && body.phone;
  };

  if (!validateData(req.body)) {
    return res.status(400).json({ message: "Deve ser informado o email, password, nome e fone." });
  }
  const token = generateToken();
  res.status(200).json({ token });
});

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
