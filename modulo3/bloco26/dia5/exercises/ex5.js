/*
Atividade 5:
Rota: /:operacao/:numero1/:numero2
Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.
*/

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao, numero1, numero2 } = req.params;
  let result;
  switch (operacao) {
    case 'soma':
      result = numero1 + numero2;
      res.status(200).json(result);
      break;

    case 'subtração':
      result = numero1 - numero2;
      res.status(200).json(result);
      break;

    case 'divisão':
      result = numero1 / numero2;
      res.status(200).json(result);
      break;

    case 'multiplicação':
      result = numero1 * numero2;
      res.status(200).json(result);
      break;

    default:
      res.status(400).json('invalid operation');
      break;
  }
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));