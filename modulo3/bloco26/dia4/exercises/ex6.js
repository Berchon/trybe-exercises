/*
Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON.
Crie um arquivo chamado simpsons.json e popule com os seguintes dados: olhar o arquivo simpsons.json

- Utilize o modulo fs do Node para ler/escrever arquivos.
- Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
- Caso dê tudo certo, a resposta deve voltar com status 200 OK .
- Foque os contratos das APIs (o que elas devem receber e o que devem retornar).
- Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.
*/

const express = require('express');
const app = express();

const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const content = await fs.readFile('./simpsons.json');
  return JSON.parse(content.toString('utf-8'));
};

app.get('/simpsons', async (_req, res) => {
  const result = await readSimpsonsFile();
  res.status(200).send('status OK');
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
