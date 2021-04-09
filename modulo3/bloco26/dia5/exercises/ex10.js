/*
Atividade 10:
Rota: /recipe/:id/ingredients
Objetivo: Deve receber uma requisição com os campos remove e/ou insert . O valor deve ser um array de ingredientes para remover ou adicionar na receita correspondente. Caso o id fornecido não exista, retorne um erro recipe not found .
Use o array abaixo para simular o banco de dados:
Copiar
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
function findRecipeIndex(idToFind) {
  const recipeIndex = recipes.findIndex(({ id }) => id === idToFind);
  return recipeIndex === -1 ? null : recipeIndex;
}
function removeIngredient(recipeIndex, ingredientsToRemove) {
  const { ingredientes } = recipes[recipeIndex];
  const newIngredients = ingredientes.filter(
    (ingredient) => !ingredientsToRemove.includes(ingredient),
  );
  recipes[recipeIndex].ingredientes = newIngredients;
}
function insertIngredient(recipeIndex, ingredientsToAdd) {
  const { ingredientes } = recipes[recipeIndex];
  const newIngredients = [...ingredientes, ingredientsToAdd];
  recipes[recipeIndex].ingredientes = newIngredients;
}

app.patch('/recipe/:id/ingredients', (req, res) => {
  const { remove, insert } = req.body;
  const id = req.params;
  const recipeIndex = findRecipeIndex(id);
  if (!recipeIndex) {
    return res.status(404).json('recipe not found');
  }

  if (remove) {
    removeIngredient(recipeIndex, remove);
  }
  if (insert) {
    insertIngredient(recipeIndex, insert);
  }
  return res.status(200).json(recipes[recipeIndex]);
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));
