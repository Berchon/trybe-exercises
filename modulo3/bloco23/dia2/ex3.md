# Vamos praticar !
Faça os desafios 1 e 2 abaixo sobre o sort utilizando a collection restaurants criada anteriormente.
1. Ordene alfabeticamente os restaurantes pelo nome (campo _*name*_ ).
```
db.restaurants.find({}, { name: 1, _id: 0 }).sort({ name: 1 })
```
2. Ordene os restaurantes de forma descrescente baseado nas avaliações.
```
db.restaurants
  .find({}, { name: 1, rating: 1, _id: 0 })
  .sort({ rating: -1 })
```