/*
Todos os endpoints devem receber um token de autenticação. Esse token deve vir no seguinte modelo: authorization: {token-aqui} . Nesse momento, como você não está salvando os tokens gerados no cadastro em nenhum lugar, só é preciso verificar que as requisições recebem um token no header que possua 16 caracteres.
Caso o token seja inválido ou inexistente, a resposta deve voltar com status 401 Unauthorized e { message: 'Token inválido!' } no corpo.
*/

const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.length === 16) return next();
  return res.status(401).json({ message: 'Token inválido!' });
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