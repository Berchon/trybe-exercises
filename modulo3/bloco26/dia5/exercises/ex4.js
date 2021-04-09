/*
Atividade 4:
Rota: /user/:name
Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. .

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]
*/

const express = require('express');

const app = express();
const PORT = 3000;

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ['Hoje o dia está maneiro!', 'Agora não está muito'],
  },
  {
    id: 3,
    user: 'rodrigo',
    comments: ['To aqui também', 'Agora não tô'],
  },
];

app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  const user = users.find(({ user: userName }) => userName === name);
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json('user not found.');
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));