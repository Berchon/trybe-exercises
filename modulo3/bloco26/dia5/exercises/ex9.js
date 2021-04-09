/*
Atividade 9:
Rota: /user/:id
Objetivo: Deve receber no campo status um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error "user isn't found".
Use o array abaixo para simular o banco de dados:

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive:true
  },
  {
    id: 3,
    user: 'paulo',
    isActive:true

  },
   {
    id: 3,
    user: 'roger',
    isActive:false
  }
]

*/

const express = require('express');

const app = express();
const PORT = 3000;

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive: true,
  },
  {
    id: 3,
    user: 'paulo',
    isActive: true,

  },
  {
    id: 3,
    user: 'roger',
    isActive: false,
  },
];

function updateUserStatus(idToFind, status) {
  const userIndex = users.findIndex(({ id }) => id === idToFind);
  if (userIndex === -1) {
    return null;
  }
  users[userIndex].isActive = status;
  return users[userIndex];
}

app.patch('/user/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (typeof status !== 'boolean') {
    return res.status(400).json("status isn't a boolean");
  }
  const updatedUser = updateUserStatus(id, status);

  if (updatedUser) {
    return res.status(200).json(updatedUser);
  }
  return res.status(404).json('user isn\'t found');
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));