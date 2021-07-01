# Agora a prática
**Exercício 1:** Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
Entrada:
Copiar
PEDRO
Saída:
Copiar
PEDRO
PEDR
PED
PE
P

```python
def name_inverted(names):
    for i in range(0, len(names)):
        print(names[:len(names) - i])
```

**Exercício 2:** Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".
```python
import random

words = ["word1", "word2", "word3"]

random_word = random.choice(words)
scrambled_word = "".join(random.sample(random_word, len(random_word)))

print(scrambled_word)
for i in range(0, 3):
    answer = input("Digite a palavra: ")
    if answer == random_word:
        print("Acertou!!!")
        break
    else:
        print(f"Voce errou a {i + 1}a. tentativa, tente novamente")

```

**Exercício 3:** Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.
```python
import random

file = open("arquivo.txt", mode="r")
words = file.read().split()
file.close()

random_word = random.choice(words)
scrambled_word = "".join(random.sample(random_word, len(random_word)))

print(scrambled_word)
for i in range(0, 3):
    answer = input("Digite a palavra: ")
    if answer == random_word:
        print("Acertou!!!")
        break
    else:
        print(f"Voce errou a {i + 1}a. tentativa, tente novamente")
```
**Exercício 4:** Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.
Saída:
```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```

```python
import json
from csv import csv_writer


def retrieve_books(file):
    return [json.loads(line) for line in file]


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category
    ]


def write_csv_report(file, headers, rows):
    writer = csv_writer(file)
    writer.writewrow(headers)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    headers = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, headers, books_percentage_rows)
```
