# Bloco 27 - NodeJS: Camada de Serviço e Arquitetura Rest e Restful

## Descrição
### O que é "Arquitetura de Software"?
<p align="justify">
Existem várias definições formais para essa pergunta. Uma ótima definição foi dada por Martin Fowler:

```Arquitetura é um conhecimento compartilhado por desenvolvedores experientes sobre como organizar um sistema de software.```

É a maneira como o sistema se organiza, quais são seus componentes, como eles conversam entre si, como as responsabilidades são distribuídas etc.

Podemos, inclusive, fazer um paralelo com a arquitetura civil.

Se você tem uma casa na neve, provavelmente o telhado dessa casa terá um formato de "V" bastante inclinado para que a neve não se acumule no topo da residência.

Já uma casa para um clima quente não necessariamente precisa seguir esse padrão de telhado, visto que ele nunca vai ver neve na vida.

Se a casa fica em um local com alta criminalidade, vamos ver mais muros do que numa área com menos criminalidade. E por aí vai.

Se você trabalhasse com engenharia civil e fosse construir uma casa, você com certeza não tentaria fazê-lo "da sua cabeça". Quais materiais você usaria, como iria integrá-los, que técnicas utilizaria para construir a casa, onde cada coisa ficaria - para tudo isso já existem padrões e métodos testados. Você pode combinar soluções, adaptá-las, estendê-las, mas utilizará um conhecimento testado e compartilhado por outras pessoas profissionais da área.

A mesma coisa se aplica à arquitetura de um software. **Existem padrões de arquitetura específicos para problemas específicos**.

Mas uma coisa que podemos ver quase sempre, independente da arquitetura utilizada, é a divisão de responsabilidades por camadas.
</p>

### Regras de negócio
<p align="justify">
Antes de falarmos de camadas, precisamos falar de regras de negócio, pois esse é um conceito essencial para entender a motivação por trás das arquiteturas. Você, provavelmente, já ouviu ou leu bastante essa expressão, mas sabe o que ela significa?

Como o próprio nome dá a entender, regras de negócio definem ou restringem algum aspecto de um negócio. São elas que definem como o negócio deve se comportar, quando uma ação deve ser tomada etc. As regras de negócio devem ser muito bem definidas e documentadas, pois guiam a tomada de decisões e moldam processos.

Em princípio, as regras de negócio podem ser executadas manualmente, mas tem se tornado cada vez mais comum automatizá-las com a ajuda de sistemas de software.

Pra tornar o conceito menos abstrato, vamos a alguns exemplos.

- Imagine um sistema que permite cadastro de usuários. Estas são algumas regras de negócio que o sistema poderia ter:
- Um usuário deve necessariamente informar seu nome, sobrenome e email;
- O email deve ser único, ou seja, não pode haver outro usuário no sistema com o mesmo email;
- Por conter material sensível, a pessoa deve ser maior de 18 anos e declarar estar de acordo com os termos de uso da plataforma;
- Sempre que um novo usuário se cadastrar, um email de confirmação deve ser enviado para o email cadastrado. Novos usuários somente poderão acessar a plataforma após serem verificados.

Como outro exemplo, imagine uma rede social fictícia em que as pessoas podem fazer posts sobre os mais diferentes assuntos. Algumas regras de negócio que essa rede social poderia ter:
- Cada post pode ter, no máximo, 300 caracteres;
- Pessoas podem comentar nas postagens umas das outras;
- Uma pessoa só pode editar ou excluir suas próprias postagens;
- Contudo, ela pode bloquear outros usuários, impedindo-os de comentar e ver as suas postagens.

Naturalmente, em sistemas de software, as regras de negócio se traduzem em códigos que controlam o comportamento das aplicações.

Com o conceito de regras de negócio bem entendido, podemos falar das três camadas do MSC e quais são as responsabilidades de cada uma.
</p>

### Arquitetura MSC
<p align="justify">
Ao longo desse bloco iremos abordar a arquitetura MSC. Vamos entrar em detalhes ao longo dos conteúdos de cada dia mas fazendo um resumo, podemos definir as três camadas das seguinte forma:

- **Camada de Modelo (M)**: Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
- **Camada de Serviço (S)**: Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
- **Camada de Controladores (C)**: Interface mais próxima do usuário ou de uma requisição, vai processar e chamar as devidas funções da camada de modelo.

**Obs.:** Algumas vezes a camada de Controller pode se comunicar direto com a camada de modelo, dispensando o uso da camada de serviço, principalmente em situações onde não temos uma regra de negócio tão complexa. Mas cuidado: isso deve ser usado apenas em casos específicos, e uma vez que um endpoint exija o uso de um service, o ideal é que todos os outros também utilizem essa camada, para que a arquitetura seja respeitada e a aplicão não torne-se "bagunçada".
</p>

## Sumário
- [Bloco 27 - NodeJS: Camada de Serviço e Arquitetura Rest e Restful](#bloco-27---nodejs:c-amada-de-serviço-e-arquitetura-rest-e-restful)
- [Descrição](#descrição)
- [Sumário](#sumário)
- [Tecnologias utilizadas nesse bloco](#tecnologias-utilizadas-nesse-bloco)
- [Conteúdos abordados nesse bloco](#conteúdos-abordados-nesse-bloco)

## Tecnologias utilizadas nesse bloco
- NodeJS
- MySQL
- MongoDB

## Conteúdos abordados nesse bloco
1. Arquitetura de Software - Camada de Model
2. Arquitetura de Software - Camada de Controller e Service
3. Arquitetura web - Rest e RESTful
4. Projeto - Store Manager
