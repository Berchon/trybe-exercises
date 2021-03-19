# Exercícios de fixação
## Operador $limit
### Exercício 1:
```
db.transactions.aggregate([
  {
    $match: {
      from: 'Dave America',
    },
  },
]);
```
### Exercício 2:
```
db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 }},
        { to: 'Lisa Simpson' },
      ]
    }
  },
]);
```
### Exercício 3:
```
db.transactions.aggregate([
  {
    $match: {
      value: { $gt: 1000 },
    },
  },
  {
    $limit: 3,
  },
]);
```
## Operador $lookup
### Exercício 1:
```
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    },
  },
]);
```
### Exercício 2:
```
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
  {
    $limit: 4,
  },
]);
```
### Exercício 3:
```
db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);
```
