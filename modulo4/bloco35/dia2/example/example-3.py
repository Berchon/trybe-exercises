# EXERCÍCIO DE FIXAÇÃO

# Defina na classe SalesReport um segundo método abstrato chamado get_length
# que retorna quantos itens tem no relatório. Tente chamar esse método a
# partir da classe herdeira que não implementa esse método e veja o erro
# que você recebe. Tente instanciar a SalesReport também! Depois disso,
# implemente uma lógica qualquer para esse método em uma das classes herdeiras
# e verifique que já é possível instanciá-la e até chamar o método!


# RESPOSTA

# Aqui nosso objeto é ver o erro que tentar instanciar uma classe abstrata -
# ou invocar um método abstrato - gera quando chamamos. Se você fizer isso
# por acidente, já saberá o motivo! Depois, queremos que se veja essas
# funcionalidades sendo usadas numa lógica de herança, que é o que queremos.

from abc import ABC, abstractmethod
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 4  # eu rolei um dado, garanto que é aleatório.


# Para testar

# Isso não funcionará
# meu_relatorio = SalesReport()

# Isso também não, a não ser que SalesReportJSON defina a função `get_length`
meu_relatorio = SalesReportJSON("meu_relatorio")
print(meu_relatorio.get_length())
