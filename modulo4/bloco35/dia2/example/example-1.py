# EXERCÍCIO DE FIXAÇÃO

# Altere o código da classe SalesReport para que ela, além de gerar relatórios
# em JSON, gere relatórios em CSV também. Defina, primeiro, como você fará a
# extensão da lógica para depois gerar o CSV mesmo. Não gaste mais que cinco
# minutos nesse exercício! Quando o relógio apitar, volte para a leitura que
# vamos refletir sobre a experiência!


# RESPOSTA

# Há várias formas de resolver esse problema! Na seção seguinte do conteúdo,
# porém, vemos que não é possível estender a funcionalidade conforme pedido
# sem evitar algum retrabalho. O propósito do exercício é evidenciar o
#  que o código, como está, gera quando queremos expandir suas funcionalidades
#  - para ilustrar, a seguir, como um bom código evitaria esse problema com
# o uso de herança.

# Abaixo mostramos uma das formas de resolver o problema, revisitando também
# o que estudamos sobre leitura de CSVs em Python.

import json
from csv import DictWriter


class SalesReport:
    def __init__(self, export_file):
        self.export_file = export_file + ".json"

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def serialize(self):
        with open(self.export_file, "w") as file:
            json.dump(self.build(), file)

    def serialize_csv(self):
        with open("meu_relatorio.csv", "w") as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# Para testar
relatorio_de_vendas = SalesReport("meu_relatorio")
relatorio_de_vendas.serialize()
relatorio_de_vendas.serialize_csv()
