# Resultado final da aplicação
![Animação](./animation.gif)

# Exemplo de Aula

## To do list
Agora, imagine que vamos implementar uma solução para salvar uma lista de itens que podem ser adicionados por quem utilizar a aplicação.

## Fluxo de dados no Redux
A imagem abaixo resume todas partes e como elas se comunicam para funcionamento do Redux com React. Basicamente, segue-se os seguintes passos:

1. Um Store é criado para armazenar todos o estado da aplicação;
2. O Store é disponibilizado através do Provider para todos os componentes da aplicação;
3. Os componentes usam o connect para conectarem-se ao Store ;
4. As pessoas que utilizam a aplicação interagem com ela e disparam eventos;
5. Estes eventos têm o nome de Actions e são enviadas ao Store através de um dispatch ;
6. Os Reducers recebem essas Actions e alteram o estado da aplicação (criando um novo estado) e salvando no Store ;
7. Os componentes conectados ao Store "ouvem" estas mudanças e atualizam a View (visualização).

<img src="./public/redux_explained.png">