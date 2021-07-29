def is_palindrome_iterative(word):
    return word == word[::-1] and len(word) != 0
