# Exercício 3
Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2° Forma Normal.

**Obs.:** Novamente, há diferentes maneiras de resolver esse problema. Desde que se atenda aos requisitos a seguir, considere o exercício correto.
## 2ª Forma Normal
- Tabela deve estar na 1ª Forma Normal
- A tabela não deve possuir dependências parciais

### Tabela funcionario
| funcionario_id | nome     | sobrenome | contato                  | telefone        | data_cadastro       |
|---------------:|:---------|:----------|:-------------------------|:----------------|:--------------------|
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25 |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05 00:00:00 |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35 |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40 |

### Tabela setor
| setor_id | nome          |
|---------:|:--------------|
| 1        | Administração |
| 2        | Vendas        |
| 3        | Operacional   |
| 4        | Estratégico   |
| 5        | Marketing     |

### Tabela setor_funcionario ou funcionario_setor (ou algum nome que represente claramente os dados presentes nessa tabela)
| funcionario_id | setor_id |
|---------------:|---------:|
| 12             | 1        |
| 12             | 2        |
| 13             | 3        |
| 14             | 4        |
| 14             | 2        |
| 15             | 5        |