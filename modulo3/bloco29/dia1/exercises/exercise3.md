# Exercício 3:
Agora vamos criar um Procfile.

1. Crie uma cópia do arquivo index.js com o nome indexProcfile.js;
```bash
cp index.js indexProcfile.js
```
2. No novo arquivo, altere a mensagem de resposta da API para "Procfile funciona mesmo!";
```javascript
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (_req, res) => {
  res.send(message + ' E o Procfile também!!! =D');
});

app.listen(port);
console.log(`Escutando na porta ${port}`);
```
3. Crie um Procfile para iniciar sua aplicação a partir do novo arquivo de indexProcfile.js.
```bash
# O arquivo Procfile não possui extensão

web: node indexProcfile.js
```

```bash
git add .
git commit -m "Adiciona Procfile"

git push heroku master
```
