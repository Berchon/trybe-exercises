const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
