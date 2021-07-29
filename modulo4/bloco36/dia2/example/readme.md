# Exercícios de fixação

## Exercício 1:

Fibonacci A sequência de fibonacci é uma sequência numérica em que, partindo dos dois primeiros números sendo 0 e 1, o próximo número será sempre a soma dos dois anteriores. Esta sequência é interessante pois aparece muito na matemática e na natureza de formas inusitadas. Veja os primeiros números:
```python
começo = [0, 1]
0 + 1 = 1 -> [0, 1, 1]
1 + 1 = 2 -> [0, 1, 1, 2]
1 + 2 = 3 -> [0, 1, 1, 2, 3]
3 + 2 = 5 -> [0, 1, 1, 2, 3, 5]
```
e assim por diante: 8, 13, 21, 33, 54...
Faça uma função que retorne o enésimo número da sequência de Fibonacci.

### Resposta

```python
def fibonacci(n):
    sequence = [0, 1]
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        sequence.append(next)
    return sequence[-1]
```
Na forma iterativa, calculamos todos os números da sequência até o número desejado.
```python
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```
Na forma recursiva, definimos o caso trivial ou condição de parada como os dois primeiros números, cuja posição na lista por acaso é igual à seu valor. Em seguida, definimos a lógica recursiva: Um número é igual à soma dos dois numeros que o precedem na sequência.

## Exercício 2:

Reversecorp Faça uma função que recebe uma lista, e retorna-a na ordem reversa.

### Resposta

```python
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list
```
Nesta solução iterativa, percorremos a lista inserindo seus elementos em uma nova lista, porém a inserção ocorre no começo da lista (posição 0), assim a ordem se inverte.
```python
def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]
```
Nesta solução recursiva primeiro definimos a condição de parada, ou caso base: se a lista tiver menos de dois elementos, ela invertida será ela mesma. Depois, a lógica de recursão é: Para inverter uma lista, basta colocar o primeiro elemento no fim, e depois inverter o resto da lista.

## Exercício 3:

Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somá-lo a todos os números antecessores a ele.
Exemplo:
```python
Número passado por parâmetro à função: 4

Execução: 4 + 3 + 2 + 1

Resultado: 10
```

### Resposta

```python
def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)


sum_recursive(4)
```
Podemos observar que a condição de parada é se n for igual a 0, caso contrário a operação continuará sendo feita.