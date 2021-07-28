# Exercícios de fixação

## Exercício 1

Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
```python
def multiply_array(numbers):
    result = 0
    for number in numbers:
            result *= number

    return result
```

### Resposta

O algoritmo faz uma iteração para cada elemento do array de entrada, o `numbers`, então, tendo n como o tamanho da entrada o algoritmo tem uma Complexidade de Tempo `O(n)`. O que ele faz a cada iteração, no entanto, é alterar o valor de uma variável, a `result`. Sendo assim, tenha a entrada um ou cem mil elementos, o espaço em memória ocupado será o mesmo. Assim sendo, a Complexidade de Espaço do algoritmo é `O(1)`.

## Exercício 2

Código base para o exercício:
```python
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1,2,3,4,5]

multiply_arrays(meu_array, meu_array)
```

Para desembaraçar a sopa de letrinhas que a seção anterior criou, meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em `n` vezes, o tempo de execução aumenta em `n²` vezes!

### Resposta

Para fazer o exercício, basta substituir a linha a linha que define meu_array por esta:
```python
meu_array = list(range(1, 1000))
```
Use números grandes para que a diferença de tempo fique visível, rode uns cinco exemplos! Há várias formas de medir o tempo de execução também. Nós usamos esta:
```python
time python3 meu_programa.py
```

## Exercício 3

Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de `O(n³)`!

### Resposta

Podemos alterar o algoritmo do exercício anterior pra isso:
```python
def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# Usar 1000 aqui vai ser muito lento!
meu_array = list(range(1, 200))
multiply_arrays(meu_array, meu_array, meu_array)
```
A lógica da complexidade cúbica, ou `O(n³)`, estende-se da quadrática: se o array de entrada tem 10 elementos, haverá `10 * 10 * 10 == 1000` iterações. Conte para ver!

## Exercício 4

Imagine que você recebe dois arrays de tamanho igual, `array1` e `array2`. Para cada elemento do `array1`, realize uma busca binária no `array2`. Mostre que a ordem de complexidade do algoritmo resultante é `O(n * log n)`, ou `O(n log n)`.

### Resposta

Se cada busca binária tem uma complexidade `O(log n)` e fazemos `n` buscas, sendo cada uma nessa complexidade, a complexidade final é `O(n * log n)`.
