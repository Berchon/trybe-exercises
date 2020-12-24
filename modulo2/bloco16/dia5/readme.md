# Dia 5 - Testes em React-Redux

## Descrição
<p align="justify">
      Testar é a melhor maneira de proteger nossas aplicações. Porém, quando utilizamos frameworks ou bibliotecas, como é o caso do Redux, algumas adequações podem ser necessárias pra que os testes funcionem da maneira correta.
</p>
<p align="justify">
      Independente do que você irá adicionar à sua aplicação, como uma biblioteca, testar sempre será extremamente útil.
</p>

<p align="justify">
      Isso se aplica também ao Redux. Ainda que tenhamos algumas pontuais alterações na maneira de testar uma aplicação React, testar continuará sendo a principal forma de manter a integridade de nosso sistema.
</p>

## Sumário
- [Dia 5 - Testes em React-Redux](#dia-5---testes-em-react-redux)
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
1. Testando Redux
2. Testes assíncronos

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

<p align="justify">
      Para poder fazer uso de Redux Thunk, é preciso que se instale em uma aplicação React o pacote redux-thunk:
</p>

```bash
      npm install redux-thunk
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
