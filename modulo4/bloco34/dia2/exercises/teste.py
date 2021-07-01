import json

with open("books.json") as file:
    books = json.load(file)
    categories = {""}
    for book in books:

        # print(book["categories"])
        for category in book["categories"]:
            categories.add(category)

    print(categories)

# print(books)  # imprime o primeiro pokemon da lista
