/*
Atividade 2:
Rota: /btc/price
Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token. . Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8
*/

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

function verifyToken(token) {
  const tokenRegex = /^(\d|\w){12}$/gm;
  return tokenRegex.test(token);
}

app.get('/btc/price', async (req, res) => {
  const { authorization: token } = req.header;
  const tokenIsValid = verifyToken(token);
  if (tokenIsValid) {
    const btcEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const btcData = await axios.get(btcEndpoint).then(({ data }) => data);
    return res.status(200).json({ btcData });
  } else {
    return res.status(401).json('email or password is incorrect.');
  }
});

app.listen(PORT, () => console.log(`listen to port ${PORT} `));