// require('dotenv').config();

// const express = require('express');
// const bodyParser = require('body-parser');

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(bodyParser.json());

// app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// // não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (request, response) => {
//   response.send();
// });
const express = require('express');
const server = require('./server');

const app = express();
app.use(server);