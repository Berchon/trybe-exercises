/*
Atividade 6:
Rota: /recipe/:id
Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
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

function deleteFromDb(recipeToDeleteId) {
  const recipeToDeleteIndex = recipes.findIndex(({ id }) => id === recipeToDeleteId);
  if (recipeToDeleteIndex === -1) {
    return null;
  }

  const deletedElement = recipes.splice(recipeToDeleteIndex, 1)[0];
  return deletedElement;
}

app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const deletedRecipe = deleteFromDb(id);
  if (deletedRecipe) {
    return res.status(200).json(deletedRecipe);
  }
  res.status(404).json('recipe not found');
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));