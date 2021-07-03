# ❗ Importe o arquivo books.json no MongoDB antes de responder as próximas
# questões.
# 🦜 mongoimport --db library books.json

# Exercício 6 Escreva um programa que se conecte ao banco de dados library e
# liste os livros da coleção books para uma determinada categoria recebida por
# uma pessoa usuária. Somente o título dos livros deve ser exibido.

from pymongo import MongoClient

client = MongoClient()
db = client.library
books = db.books

category = input("Escolha uma categoria: ")
titles = db.books.find({"categories": category}, {"title": 1, "_id": 0})

for title in titles:
    print(title["title"])

client.close()


# Outra forma de Resolver
from pymongo import MongoClient

category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
