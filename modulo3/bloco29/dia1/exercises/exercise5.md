Exercício 5:
Faça deploy de uma aplicação React.

1. Crie uma aplicação React utilizando create-react-app;
```bash
npx create-react-app my-app
```
2. Crie um novo app utilizando o buildpack mars/create-react-app;
```bash
cd my-app

# Só necessário se CRA não criar automaticamente um novo repositório
git init
git add .
git commit -m 'react-create-app on Heroku'

heroku create -b https://github.com/mars/create-react-app-buildpack.git
```
3. Então, faça o deploy do app no Heroku.
```bash
git push heroku master
```
