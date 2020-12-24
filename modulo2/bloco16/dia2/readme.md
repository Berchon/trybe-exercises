# Dia 2 - Usando o Redux no React

## Descrição
<p align="justify">
      Redux é uma ferramenta para gerenciar o estado de uma aplicação JavaScript. Antes de entender o porquê de utilizar React com Redux, deve-se entender o porquê de utilizarmos uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.

</p>
<p align="justify">
      A maioria das bibliotecas, como React , Angular etc, possuem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou necessidade de uma ferramenta externa. Isto funciona bem para aplicações que possuem poucos componentes mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.
</p>
<p align="justify">
      Utilizar uma ferramenta externa para gerenciar o estado, como o Redux, facilitará o desenvolvimento e crescimento das aplicações.
</p>

## Sumário
- [Dia 2 - Usando o Redux no React](#dia-2---usando-o-redux-no-react)
- [Descrição](#descrição)
- [Sumário](#sumário)
- [Tecnologias utilizadas nesse dia](#tecnologias-utilizadas-nesse-dia)
- [Conteúdos abordados nesse dia](#conteúdos-abordados-nesse-dia)
- [Criar aplicação react](#criar-aplicação-react)
- [Como rodar a aplicação](#como-rodar-a-aplicação)

## Tecnologias utilizadas nesse dia
- HTML 5
- CSS 3
- Javascript
- React
- React Router
- React Testing Library
- Redux

## Conteúdos abordados nesse dia
1. Actions
2. Store
3. Reducers
4. Dispatch
5. Configurando Redux com React
6. mapDispatchToProps
7. connect
8. mapStateToProps
9. Fluxo de dados no Redux

## Criar aplicação react
<p align="justify">
      Para criar a aplicação em react digite:
</p>

```bash
      npx create-react-app nome-do-aplicativo
```
<p align="justify">
      Para poder fazer uso de React Router, é preciso que se instale em uma aplicação React o pacote react-router-dom:
</p>

```bash
      npm install react-router-dom
```

<p align="justify">
      Para poder fazer uso de React Redux, é preciso que se instale em uma aplicação React o pacote react-redux:
</p>

```bash
      npm install --save redux react-redux
```

## Como rodar a aplicação
<p align="justify">
      Para executar a aplicação em react digite:
</p>

```bash
      cd nome-do-aplicativo
      npm start
```

<p align="justify">
      Para executar os testes da aplicação em react digite:
</p>

```bash
      npm test
```

<p align="justify">
      Pra muita coisa poder funcionar você precisa colocar no seu src/setupTests.js essas linhas:
</p>

```js
      // setupTests.js
      import MutationObserver from '@sheerun/mutationobserver-shim';
      window.MutationObserver = MutationObserver;
```
