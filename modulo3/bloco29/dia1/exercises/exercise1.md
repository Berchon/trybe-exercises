# Exercício 1:
Crie uma API simples no node utilizando express . No arquivo index.js , crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no Heroku utilizando o CLI.

1. Crie uma nova pasta para o projeto.

2. Inicialize o projeto com npm init . Adicione o script "start": "node index.js" ao seu pacakge.json . Ele deverá ficar parecido com esse:
```json
{
  "name": "test-heroku",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
3. Inicialize um novo repositório git:
```bash
git init
git add .
git commit -m 'First commit'
```
4. Instale o express com o npm:
```bash
npm install express
```
5. Adicione um arquivo index.js na raiz do projeto. Ele deverá ser parecido com o abaixo:
```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Escutando na porta ${port}`);
```
6. Inicialize o Heroku.
```bash
heroku create
```
7. Crie um arquivo .gitignore na raiz do projeto com o conteúdo node_modules/ .

8. Commite as alterações:
```bash
git add .
git commit -m 'Install express and add index.js'
```
9. Publicar no Heroku
```bash
git push heroku master
```
