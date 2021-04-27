Exercício 4:
Simule o deploy em multiambientes (produção e homologação). Para isso:

1. Renomeie o remote do deploy dos exercícios anteriores para homolog;
```bash
git remote rename heroku homolog
```
2. Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod;
```bash
heroku create --remote prod
```
3. Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
```bash
heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-HOMOLOG

heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-PROD

git push prod master
```
