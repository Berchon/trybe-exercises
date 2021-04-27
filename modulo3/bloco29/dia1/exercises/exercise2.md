# Exercício 2:
Agora, modifique a API para responder a uma nova mensagem:
1. Crie uma nova variável de ambiente com um texto qualquer;
```bash
heroku config:set MESSAGE='Variáveis funcionam!!!' --app nome-do-seu-app-12345
```
2. Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.
```javascript
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port);
console.log(`Escutando na porta ${port}`);
```
```bash
git add .
git commit -m "Adiciona mensagem de response por variável de ambiente"

git push heroku master
```
