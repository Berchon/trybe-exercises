Exercício 7:
Execute sua API utilizando o runtime do PM2. Para isso:
1. Adicione o módulo do pm2 às dependências do projeto;
```bash
$ npm install pm2
```
2. Altere o script de start do seu app ( package.json ) para utilizar o runtime do pm2. Lembre-se de referenciar seu arquivo ecosystem;
```json
// ...
"scripts": {
  "start": "pm2-runtime start ecosystem.config.yml",
}
// ...
```
3. Execute o script através do npm ou yarn.
```bash
$ npm start
```
