/*
Atividade 3:
Rotas: /posts/:id e /posts
Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . 

A rota /posts deve trazer todos os posts cadastrados.
*/

const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/posts', (_req, res) => {
    res.status(200).json(data);
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const dataSend = data.find(item => item.id === id)
  if (!dataSend) {
    return res.status(404).send('ID not found!');
  }
  return res.status(200).send(dataSend);
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
