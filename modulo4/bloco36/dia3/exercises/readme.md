# Agora a prática
Vamos colocar tudo o que vimos até agora em prática.
Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte classe:
```python
from time import perf_counter


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name
    def __enter__(self):
        self.start = perf_counter()
    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")
```
Para utilizar o `Cronometro`, basta usá-lo dentro de um `with` e em seguida chamar a função:
```python
from Cronometro import Cronometro


with Cronometro("algoritmo"):
    algoritmo(...)
```
## Exercício 1 

Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"], após duas iterações utilizando bubble sort , como estaria este array?

### Resposta

["elefante", "arara", "javali", "macaco", "zebra"]

## Exercício 2

Demonstre o passo a passo, do processo de mistura, de um array sendo ordenado, utilizando merge sort. Comece o passo a passo a partir da linha abaixo:
```python
7 3    5 4    6 8    2 1
```

### Resposta
```python
7 3    5 4    6 8    2 1
3 7    4 5    6 8    1 2
3 4 5 7       1 2 6 8
1 2 3 4 5 6 7 8
```

## Exercício 3

Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
🦜 A entrada de dados pode ser gerada da seguinte maneira:
```python
from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:] # copia dos ordenados
shuffle(aleatorios) # embaralha eles
```

### Resposta

O código do exercício está em ex3.py
**OBS.:** Esse código não foi desenvolvido por mim, somente analisei o retorno dele

```python
`insertion_sort` com entrada ordenada de 200 números demorou 2.1864005248062313e-05 segundos
`insertion_sort` com entrada inversamente ordenada de 200 números demorou 0.002141760000085924 segundos
`insertion_sort` com entrada aleatória de 200 números demorou 0.0011228850053157657 segundos
**************************************************
`insertion_sort` com entrada ordenada de 2000 números demorou 0.0003032690001418814 segundos
`insertion_sort` com entrada inversamente ordenada de 2000 números demorou 0.25924073399801273 segundos
`insertion_sort` com entrada aleatória de 2000 números demorou 0.13300925600196933 segundos
**************************************************
`insertion_sort` com entrada ordenada de 20000 números demorou 0.004059227998368442 segundos
`insertion_sort` com entrada inversamente ordenada de 20000 números demorou 26.524865086998034 segundos
`insertion_sort` com entrada aleatória de 20000 números demorou 13.606069983005 segundos
**************************************************
`selection_sort` com entrada ordenada de 200 números demorou 0.0008715029980521649 segundos
`selection_sort` com entrada inversamente ordenada de 200 números demorou 0.0009494540063315071 segundos
`selection_sort` com entrada aleatória de 200 números demorou 0.0009432070000912063 segundos
**************************************************
`selection_sort` com entrada ordenada de 2000 números demorou 0.11199772699910682 segundos
`selection_sort` com entrada inversamente ordenada de 2000 números demorou 0.11359806999826105 segundos
`selection_sort` com entrada aleatória de 2000 números demorou 0.10327001199766528 segundos
**************************************************
`selection_sort` com entrada ordenada de 20000 números demorou 10.195943639999314 segundos
`selection_sort` com entrada inversamente ordenada de 20000 números demorou 10.928924503998132 segundos
`selection_sort` com entrada aleatória de 20000 números demorou 10.540765901001578 segundos
**************************************************
```

## Exercício 4

Compare o tempo de execução do algoritmo `merge_sort` e `bubble_sort` para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

### Resposta

O código do exercício está em ex4.py
**OBS.:** Esse código não foi desenvolvido por mim, somente analisei o retorno dele


No bubble sort em um caso médio temos uma complexidade de O(n²) , o que significa que normalmente temos n² trocas, já o merge sort , como utiliza dividir e conquistar, consegue ter uma complexidade O(n log n) em média. Mesmo em um pior cenário, onde ao embaralharmos os dois arrays, tornando-os inversamente ordenados, o merge sort seria mais rápido, pois sua complexidade ainda seria O(n log n) e o bubble sort teria complexidade quadrática O(n²).

```python
bubble_sort demorou 6.40970779700001 segundos
merge_sort demorou 0.050860385003034025 segundos
```

## Exercício 5

Converta o algoritmo recursivo de busca binária em iterativo.

### Resposta

O código do exercício está em ex5.py

## Exercício 6

Para descobrirmos qual __commit__ introduziu um erro no sistema, precisamos voltar no tempo verificando os __commits__ antigos, de modo a descobrir um __commit__ em que os testes falham. Supondo que isto será representado como um **array de booleanos**, descubra o índice onde o erro ocorreu pela primeira vez.
Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.

```python
entrada: [True, True, True, True, False, False, False]
saída: 4


entrada: [True, True, False, False, False, False, False]
saída: 2
```

💡 Curiosidade: O comando git bisect executa de maneira similar a este exercício, se implementado de forma eficiente 😂.

### Resposta

O código do exercício está em ex6.py

