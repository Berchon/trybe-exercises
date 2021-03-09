O MongoDb possui diversas ferramentas como, por exemplo, mongo, mongosh, Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

Utilizando a coleção **bios**, construa queries para retornar os seguintes itens:
# Exercício 1
Retorne o documento com _id igual a 8.

```
db.bios.find({ _id: 8 })
```