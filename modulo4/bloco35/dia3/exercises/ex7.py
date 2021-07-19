class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card


class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code


creditCard = CreditCard("Nome", 123, "Jul", 2021, 12345)
order = Order(["item1", "item2"], creditCard)
print(order.credit_card.year)
