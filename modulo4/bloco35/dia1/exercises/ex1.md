# Agora a prática
Vamos exercitar nossa capacidade de abstração em diferentes cenários. Em cada exercício reflita sobre a modelagem, as características, o comportamento e relações entre as classes e as implemente em Python!

**Exercício 1:** Em um contexto de orientação a objetos, como podemos definir o que são mensagens e qual a sua importância?

```json
Orientação a objetos é sobre objetos e sua comunicação. E essa comunicação entre os objetos é feita através de mensagens.

Uma mensagem é uma das responsabilidades que um objeto pode ter, sendo utilizada para invocar um comportamento. Quando uma mensagem é enviada a um objeto, o mesmo pode alterar seu estado.
```

**Exercício 2:** Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?
🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte notação para descrever nossas abstrações:
```json
Nome da abstração
Quadrado

atributos/estados
- lado (tamanho)

comportamentos
- calcular area (lado * lado)
- calcular perímetro (4 * lado)
```

```json
Nome da abstração
Retângulo

atributos/estados
- base
- altura

comportamentos
- calcular area (base * altura)
- calcular perímetro (2 * lado + 2 * altura)
- calcular diagonal ([base^2 + altura^2]^(1/2))
```
```python
class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


# Para testar!
retangulo_1 = Retangulo(5)
print(retangulo_1.calcular_area())
print(retangulo_1.calcular_perimetro())
```

**Exercício 3:** E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?
```json
Nome da abstração
Círculo

atributos/estados
- raio

comportamentos
- calcular area (PI * raio^)
- calcular perímetro (2 * PI * raio)
- calcular diâmetro (2 * raio)
```
```python
class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.raio * self.raio * self.PI

    def calcular_perimetro(self):
        return self.raio * 2 + self.pi


# Para testar!
circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())
```

**Exercício 4:** Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?
```json
Nome da abstração
Produto

atributos/estados
- nome
- preco
- quantidade
- em_estoque

comportamentos
- calcular baixa_no_estoque (em_estoque -= quantidade)
```
```json
Nome da abstração
Pedidos

atributos/estados
- numero_pedido
- produtos
- total

comportamentos
- inserir_produtos
- atualiza_total
```
```python
class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens_consumidos, forma_de_pagar, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagar = forma_de_pagar
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


# Para testar!
sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 0.1)

print(pedido_mesa_1.calcular_total_com_descontos())
```

**Exercício 5:** Notou que os pilares da orientação a objetos começam a manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora então modelarmos uma televisão?
🐦 Pense em como encapsular comportamentos como o estado (ligado/desligado), ou a taxa de variação do volume, que muda de TV para TV etc.
```json
Nome da abstração
Televisão

atributos/estados
- dimensão
- marca
- tamanho_tela
- resolução
- tipo
- tensão
- frequencia

comportamentos
- liga/desliga
- mudar_canal
- mudar_volume
```
```python
class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada


# Para testar!

tv_da_sala = Televisao(42)
tv_da_sala.aumentar_volume()
print(tv_da_sala.volume)

tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala.volume)

tv_da_sala.modificar_canal(42)
print(tv_da_sala.canal)

tv_da_sala.ligar_ou_desligar()
print(tv_da_sala.ligada)
```