# Exercício 5:
Adicione à API criada um endpoint que simule um erro de produção. Para isso, pode ser utilizado o comando process.exit . O objetivo é fazer com que o processo pare e então o PM2 entre em ação para restartá-lo.
```nodejs
<!-- Adicione um trecho semelhante à API: -->

app.get('/break', (req, res) => {
  res.send('Quebrando...');

  process.exit(1);
});
```
