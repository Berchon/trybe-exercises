# Exercício 8
Conte quantos livros existem com o status "PUBLISH".

```
db.books.find({status: "PUBLISH"}).count()
```