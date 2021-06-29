# Testando o Python

**Obs.:** *Digite `python3` para entrar terminal interativo ou `REPL` ( Read-Eval-Print Loop ).*

**Exercício 1:** No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
```python
a = 10
b = 5
soma = a + b
subtracao = a - b
multiplicacao = a * b
divisao = a / b

print(soma)
print(subtracao)
print(multiplicacao)
print(divisao)
```

**Exercício 2:** Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
```python
hours = 6
minutes = hours * 60
seconds = minutes * 60

print(hours)
print(minutes)
print(seconds)
```

**Exercício 3:** Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
```python
print(hours)

print(hours);
```

**Exercício 4:** Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
```python
precoLivro = 24.20 * (1 - 0.4) # que seria o mesmo q multiplicar por 0.6
numeroDeLivrosComprados = 60
custoTransporte = 3 + 0.75 * (numeroDeLivrosComprados - 1)

valorDaCompra = precoLivro * numeroDeLivrosComprados + custoTransporte

print(valorDaCompra)
```

**Exercício 5:** Adicione o elemento "Ciência da Computação" à lista.
    🎨 Funções e variáveis devem ser nomeadas com letras minúsculas e underscore, caso tenham mais de uma palavra: minha_variavel.
```python
trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")
```

**Exercício 6:** Adicione à lista "Ciência da Computação" e a imprima para verificar a adição.
```python
print(trybe_course)
```

**Exercício 7:** Acesse e altere o primeiro elemento da lista para "Fundamentos".
```python
trybe_course[0] = 'Fundamentos'
```

**Exercício 8:** Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
```python
nomes = set()
nomes.add("Luciano")
nomes
```

Vamos fixar os aprendizados sobre dicts?
Utilizando o código abaixo, faça os exercícios de fixação 8, 9 e 10:
```json
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
```
Em JavaScript, não precisávamos colocar a chave do objeto entre aspas, porém, em Python, isso é necessário.
**Exercício 9:** O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key?
```python
info.personagem #Dá erro

info["personagem"] # retorna Margarida
```

**Exercício 10:** Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
```python
info["recorrente"] = "Sim"
```

**Exercício 11:** Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
```python
del info["origem"]
info.items()
```

**Exercício 12:** Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
```python
# Uma tupla, mas eu usaria um dicionário pois fica mais claro
```

**Exercício 13:** Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?
```python
# dict é a estrutura mais adequada, pois conseguimos armazenar o elemento da lista como chave e a quantidade de vezes que ele aparece como valor da chave.

my_list = [20, 20, 1, 2];
count_elements = {
    20: 2,
    1: 1,
    2: 2
}
```

**Exercício 14:** O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.
```python
fat = 1
for index in range(1,6):
    fat *= index

fat 
```

**Exercício 15:** Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].
Experimente utilizar a sintaxe de compreensão de listas.
```python
ratings = [6, 8, 5, 9, 10]

new_ratings = [rate * 10
    for rate in ratings
]
```

**Exercício 16:** Percorra a lista do exercício 15 e imprima "Múltiplo de 3" se o elemento for divisível por 3.
```python
ratings = [6, 8, 5, 9, 10]

for rate in ratings:
    if (rate%3 == 0):
        print("Múltiplo de 3")
```
