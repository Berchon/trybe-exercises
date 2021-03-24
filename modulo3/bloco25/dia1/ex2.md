# Agora, a prática

Para esta etapa, utilizaremos um dataset que contém três coleções: clientes , produtos e vendas . Utilize os comandos abaixo para importar essas coleções para o banco erp:
1. Faça o download dos arquivos json , clicando com o botão direito e escolhando a opção "Salvar como":
    * clientes
    * produtos
    * vendas
2. Faça a importação para sua instância do MongoDB:
```
mongoimport --db erp <caminho_do_arquivo_clientes.json>
mongoimport --db erp <caminho_do_arquivo_produtos.json>
mongoimport --db erp <caminho_do_arquivo_vendas.json>
```
3. Conecte-se à sua instância e confira o número de documentos em cada coleção:
```
use erp;
db.clientes.count(); // 499
db.produtos.count(); // 499
db.vendas.count(); // 4900
```
Com o dataset importado, é hora de colocar a mão na massa!

O MongoDb possui diversas ferramentas, como, por exemplo, mongo , mongosh , Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.

**Exercício 1:** Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
```
db.clientes.aggregate([
  {
    $match: {
      sexo: "MASCULINO",
    },
  },
]);
```

**Exercício 2:** Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .
```
use('erp');
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte:  ISODate(("1995-01-01")),
        $lte:  ISODate(("2005-12-31")) 
      }
    },
  },
]);
```

**Exercício 3:** Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
```
use('erp');
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte:  ISODate(("1995-01-01")),
        $lte:  ISODate(("2005-12-31")) 
      }
    },
  },
  { $limit: 5 }
]);
```

**Exercício 4:** Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
```
db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC",
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    }
  }
]);
```

**Exercício 5:** Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
```
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total: { $sum: 1 }
    }
  }
]);
```

**Exercício 6:** Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .
```
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf",
      },
      total: { $sum: 1 }
    }
  },
]);
```

**Exercício 7 :** Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
Copiar
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
```
db.clientes.aggregate(
  [
    {
      $group: {
        _id: {
          sexo: "$sexo",
          uf: "$endereco.uf",
        },
        total: { $sum: 1 }
      }
    },
    {
      $project: {
        estado: "$_id.uf",
        sexo: "$_id.sexo",
        total: "$total",
        _id: 0,
      }
    }
  ]
);
```

**Exercício 8 :** Descubra quais são os 5 clientes que gastaram o maior valor.
```
db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["EM SEPARACAO", "ENTREGUE"]
        }
      }
    },
    {
      $group: {
        _id: "$clienteId",
        gasto: {
          $sum: "$valorTotal"
        }
      }
    },
    {
      $sort: { gasto: -1 }
    },
    {
      $limit: 5
    }
  ]
);
```

**Exercício 9 :** Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
```
db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["EM SEPARACAO", "ENTREGUE"]
        },
        dataVenda: {
          $gte: ISODate("2019-01-01"),
          $lte: ISODate("2019-12-31"),
        },
      },
    },
    {
      $group: {
        _id: "$clienteId",
        gasto: {
          $sum: "$valorTotal"
        }
      }
    },
    {
      $sort: { gasto: -1 }
    },
    {
      $limit: 10
    }
  ]
);
```

**Exercício 10 :** Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
Dica: O operador $count pode simplificar sua query .
```
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $count: 'clientes'
  },
]);
```

**Exercício 11 :** Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .
```
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
          $gte: ISODate("2020-01-01"),
          $lte: ISODate("2020-03-31")
        }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $lt: 3 },
    }
  },
  {
    $count: 'clientes'
  },
]);
```

**Exercício 12 :** Descubra quais as três ufs que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
Copiar
{
  "totalVendas": 10,
  "uf": "SP"
}
```
db.vendas.aggregate(
  [
    {
      $match: {
        dataVenda: {
          $gte: ISODate("2020-01-01"),
          $lte: ISODate("2020-12-31"),
        },
      },
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "totalClientes",
      },
    },
    {
      $group: {
        _id: "$totalClientes.endereco.uf",
        totalVendas: { $sum: 1 },
      }
    },
    {
      $sort: {
        totalVendas: -1
      }
    },
    {
      $limit: 3
    },
    {
      $project: {
        _id: 0,
        totalVendas: "$totalVendas",
        uf: "$_id",
      }
    }
  ]
);
```

**Exercício 13 :** Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
Copiar
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}

```
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
    $unwind: "$cliente"
  },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
    $sort: {
      uf: 1
    }
  }
]);
```