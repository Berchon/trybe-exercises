# Exercício 9

Exiba os campos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id.

```
db.books.find({}, {title: 1, isbn: 1, pageCount: 1, _id: 0}).limit(3)
```