# Antes de iniciar
Use o arquivo create_class_movie.db.mongodb para criar/restaurar o banco de dados original

# Para visualizar os dados
Para cada execução, utilize o método find() para conferir as alterações nos documentos
```
use('class');
db.movies.find();
```

## Exercício 1:
Adicione a categoria "superhero" ao filme Batman.
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $push : {
      "category": "superhero"
    }
  },
  { upsert: true }
);
```

## Exercício 2:
Utilizando o modificador ```$each```, adicione as categorias "villain" e "comic-based" ao filme Batman .
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $push : {
      "category": {
        $each: ["villain", "comic-based"]
      }
    }
  },
  { upsert: true }
);
```

## Exercício 3:
Remova a categoria "action" do filme Batman.
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $pop : {
      "category": -1
    }
  },
  { upsert: true }
);
```
Outra forma de resolver
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $pull : {
      "category": "action"
    }
  },
  { upsert: true }
);
```

## Exercício 4:
Remova o primeiro elemento do array category do filme Batman.
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $pop : {
      "category": -1
    }
  },
  { upsert: true }
);
```

## Exercício 5:
Remova o último elemento do array category do filme Batman.
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $pop : {
      "category": 1
    }
  },
  { upsert: true }
);
```

## Exercício 6:
Adicione o elemento "action" ao array ```category``` do filme Batman, garantindo que esse valor não se duplique.
```
db.movies.updateOne(
  { title: "Batman" },
  { 
    $addToSet : {
      "category": "action"
    }
  },
  { upsert: true }
);
```

## Exercício 7:
Adicione a categoria "90's" aos filmes Batman e Home Alone.
```
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone" ]} },
  { 
    $push : {
      "category": "90's"
    }
  },
  { upsert: true }
);
```

## Exercício 8:
Crie um array de documentos chamado "cast" para o filme Home Alone com os seguintes dados:
```
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

```
db.movies.updateOne(
  { title: "Home Alone" },
  { 
    $push : {
      "cast": {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          }
        ]
      }
    }
  },
  { upsert: true }
);
```


## Exercício 9:
Adicione o campo ```character``` com o valor ```Marv``` ao array de ```cast``` em que o campo ```actor``` seja igual a ```Daniel Stern``` no filme ```Home Alone```.
```
db.movies.updateOne(
  { title: "Home Alone" },
  { 
    $set : {
      "cast.$[item].character": "Marv"
    }
  },
  { arrayFilters: [{ "item.actor": "Daniel Stern" }] }
);
```

## Exercício 10:
Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
```
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```
```
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      "cast" : {
        $each: [
          { "character": "Batman" },
          { "character": "Alfred" },
          { "character": "Coringa" },
        ]
      }
    }
  }
);
```

## Exercício 11:
Produza três querys para o filme Batman:
- Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
- Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
- Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.
```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Batman"
  },
  {
    push: { "cast.$.actor": "Christian Bale" }
  }
);
```
```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Alfred"
  },
  {
    push: { "cast.$.actor": "Michael Caine" }
  }
);
```
```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Coringa"
  },
  {
    push: { "cast.$.actor": "Heath Ledger" }
  }
);
```

## Exercício 12:
Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
```
db.movies.updateOne(
  {
    "title": "Batman",
    "cast.character": "Batman"
  },
  {
push: { 
      "cast.$.actor": { 
each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
sort: 1
      }
    }
  }
);
```
