class Deque:
    FIRST_ELEMENT = 0

    def __init__(self, capacity=0):
        self._data = list()
        self._capacity = capacity

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(map(lambda x: str(x), self._data)) + ")"

    def is_empty(self):
        return not len(self)

    def is_full(self):
        return len(self) == self._capacity

    def push_front(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.append(value)

    def pop_front(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop(self.FIRST_ELEMENT)

    def pop_back(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop()

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]
        return None

    def clear(self):
        while self._data:
            self.pop_front()

    def exists(self, value):
        return value in self._data

    def peek(self, position, order=None):
        if position < 0 or position > len(self) - 1:
            return None
        if not order:
            return self._data[position]
        return self._data[::-1][position]


if __name__ == "__main__":
    deque = Deque()
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)  # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__())  # saída: 10

    print(deque.pop_front())  # saída: 10, pois ele retorna o número retirado
    print(deque.pop_back())  # saída: 5, pois ele retorna o número retirado

    print(deque)  # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
    print(deque.__len__())  # saída: 8

    print(deque.peek_front())  # saída: 9
    print(deque.peek_back())  # saída: 4
