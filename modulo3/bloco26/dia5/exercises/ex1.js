/*
Atividade 1:
Rota: /login
Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
*/

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

function verifyEmail(email) {
  const emailRegex = /^([a-zA-Z0-9_-]+)@mail\.com$/gm;
  return emailRegex.test(email);
}
function verifypassword(password) {
  const passwordRegex = /^\d{4,8}$/gm;
  return passwordRegex.test(password);
}

app.post('/login', (req, res) => {
  const { body } = req;
  const emailIsValid = verifyEmail(body.email);
  const passwordIsValid = verifypassword(body.password);
  if (emailIsValid && passwordIsValid) {
    const token = crypto.randomBytes(6).toString('hex');
    return res.status(200).json({ token });
  } else {
    return res.status(401).json('email or password is incorrect.');
  }
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));