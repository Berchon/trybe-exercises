/*
Atividade 8:
Rota: /comments
Objetivo: Deve retornar todos os comentários. Se houver um query param filter na requisição, deve retornar apenas os comentários que incluem o filtro.
Use o array abaixo para simular o banco de dados:

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

app.get('/comments', (req, res) => {
  const { filter } = req.query;
  const comments = users.reduce((acc, { comments: userComments }) => [...acc, ...userComments], []);
  if (filter) {
    const filteredComments = comments.filter((comment) => comment.includes(filter));
    return res.status(200).json(filteredComments);
  }

  res.status(200).json(comments);
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));