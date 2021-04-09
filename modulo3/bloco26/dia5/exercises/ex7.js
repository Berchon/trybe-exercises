/*
Atividade 7:
Rota: /recipe/:id
Objetivo: Deve receber uma requisição com nome e ingredientes de uma receita, e substituir no banco de dados a receita que possua o id passado na requisição. Caso o id fornecido não exista, retorne um erro recipe not found .
Use o array abaixo para simular o banco de dados:

const recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  }
]
*/

const express = require('express');

const app = express();
const PORT = 3000;

const recipes = [
  {
    id: 12345,
    name: 'farofa de bacon',
    ingredientes: ['farofa', 'bacon'],
  },
  {
    id: 12346,
    name: 'ovo mexido',
    ingredientes: ['ovo'],
  },
];

function updateFromDb({ id: recipeToUpdateId, name, ingredientes }) {
  const recipeToUpdateIndex = recipes.findIndex(
    ({ id }) => id === recipeToUpdateId,
  );
  if (recipeToUpdateIndex === -1) {
    return null;
  }
  const newRecipe = {
    id: recipeToUpdateId,
    name,
    ingredientes,
  };
  recipes.splice(recipeToUpdateId, 1, newRecipe);
  return newRecipe;
}

app.put('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const { name, ingredientes } = req.body;
  const updatedRecipe = updateFromDb({ id, name, ingredientes });
  if (updatedRecipe) {
    return res.status(200).json(updatedRecipe);
  }
  res.status(404).json('recipe not found');
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));