# Exercícios de fixação

## Exercício 1

### Exercício 1: a)
Se ainda não implementou, implemente a classe que acabamos de construir, seguindo o passo a passo anterior!
### Exercício 1: b)

Use a entrada abaixo para criar objetos `Employee`:
```python
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
```

### Exercício 1: c)

Instancie a sua classe `HashMap` e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de `id_num = 23`, acessando a informação a partir da HashMap.

### Exercício 2:
A pessoa de `id_num = 10` está com o nome errado, deveria ser `name30`. Implemente um método com a assinatura abaixo, onde `id_num` é a chave para localizar o registro que queremos alterar e `new_name` é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:
```python
def update_value(self, id_num, new_name):
    # ...
```

## Solução

```python
class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [None] * 10

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

if __name__ == "__main__":

    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))
```

## Exercício 2
A pessoa de `id_num = 10` está com o nome errado, deveria ser `name30`. Implemente um método com a assinatura abaixo, onde `id_num` é a chave para localizar o registro que queremos alterar e `new_name` é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:

## Solução

```python
class HashMap:
    # ...

    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value

if __name__ == "__main__":

    # employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    # registry = HashMap()

    # for id_num, name in employees:
    #     employee = Employee(id_num, name)
    #     registry.insert(employee)

    # print(registry.get_value(23))

    print(registry.get_value(10))
    registry.update_value(10, "name30")
    print(registry.get_value(10))
```

## Exercício 3

Tente descobrir qual técnica de tratamento de colisão é utilizada pelo `Dict`, de Python e o `HashMap`, do Java. Em inglês, o termo de busca é "collision resolution".

## Solução

A classe `Dict` utiliza o Open Addressing e `Java` utiliza Separate Chaining. Vamos entender isso com mais detalhes.

A classe `Dict`, de Python, utiliza a técnica de tratamento de colisão chamada Open Addressing e busca o próximo espaço vazio em duas fases. Ambas as fases utilizam a representação binária da chave e aplicam fórmulas matemáticas para definir o próximo índice a ser visitado.

A classe `HashMap`, de Java, utiliza a técnica de Separate Chaining , mas quando a lista do bucket começa a ficar grande, Java substitui essa lista por uma `Árvore Binária de Busca`, uma estrutura de dados que diferente, que não veremos no curso, mas já posso adiantar que é mais eficiente do que uma lista para operações de busca.

## Exercício 4

Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?

## Solução

Essa pergunta é um pouco mais difícil, então não se preocupe se não conseguiu achar essa informação de maneira explícita.

A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e resulta em uma complexidade assintótica de tempo de `O(1)`. Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho `2**15 ints`. Como em Python cada `int` ocupa 24 bytes, no mínimo, o uso de memória é considerável.

Em Java, o tamanho inicial é menor, uma vez que o que tende a crescer são as `chains` de cada bucket e não a lista de `buckets`. Por outro lado, temos o `trade-off` com o custo de tempo. Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore, chega a `O(log n)`, sendo `n` a quantidade de itens naquele bucket.

Resumindo: Python tem complexidade mais baixa, mas gasta muito espaço. Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.

## Exercício 5

Consulte a forma de se criar um dicionário chamada dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro. Exemplo:
```python
- 3 deve ser mapeado para 6;

- 10 deve ser mapeado para 20.
```

## Solução

```python
double = {i: i*2 for i in range(3, 21)}

print(double)
```

## Exercício 6

Dada uma string, construa um dicionário com a contagem de cada carácter da palavra. Utilize o pseudocódigo e o exemplo abaixo para se nortear.
```python
Para cada char na string:
    - Se o char não estiver no dicionário, inclua com o valor 1;

    - Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
```

## Solução

```python
count_chars = {}

for char in str:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)
```

## Exercício 7

Utilize o dicionário criado no exercício 5. Para as chaves ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu triplo. Consulte o método `keys()` e atualize o seu dicionário para a nova regra.

## Solução

```python
# double = {i: i*2 for i in range(3, 21)}

for key in double.keys():
    if key % 2 is not 0:
        double[key] = key * 3


print(double)
```
