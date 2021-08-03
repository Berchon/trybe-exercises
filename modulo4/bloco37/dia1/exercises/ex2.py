def shuffle(numbers):
    length = len(numbers)
    half = length // 2
    answer = []
    for index in range(half):
        answer.append(numbers[index])
        answer.append(numbers[index + half])

    if not length % 2 == 0:
        answer.append(numbers[length - 1])
    return answer


cards = [1, 4, 4, 7, 6, 6, 3]
print(shuffle(cards))
