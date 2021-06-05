// const bodyParser = require('body-parser');

const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

// app.use(express.json());

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
