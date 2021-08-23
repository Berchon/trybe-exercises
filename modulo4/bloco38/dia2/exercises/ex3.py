from ex1 import Deque


def isPalindromo(terms):
    deque = Deque()
    for character in terms:
        if character.isalpha():
            deque.push_back(character.lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True


if __name__ == "__main__":
    print(isPalindromo("Será que sou palíndromo?"))
    print(isPalindromo("mais um teste"))
    print(isPalindromo("madam"))
    print(isPalindromo("a dama admirou o rim da amada"))
    print(isPalindromo("Ze de Lima, Rua Laura, Mil e Dez"))
    print(
        isPalindromo(
            "Luza Rocelina, a namorada do Manuel, leu na moda da Romana: "
            + "anil e cor azul."
        )
    )
