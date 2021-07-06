def list_number(N):
    list = []
    for item in range(1, N + 1):
        if item % 15 == 0:
            list.append("FizzBuzz")
        elif item % 5 == 0:
            list.append("Buzz")
        elif item % 3 == 0:
            list.append("Fizz")
        else:
            list.append(item)

    return list
