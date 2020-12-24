# Dia 1 - Introdução ao Redux - O estado global da aplicação

## Descrição
<p align="justify">
      Redux é uma biblioteca que possui ampla adoção entre as pessoas que desenvolvem em React. Ela é utilizada para ajudar no gerenciamento de estado.
</p>
<p align="justify">
      É importante dizer que o Redux vem para resolver problemas de fluxo de informação dentro da sua aplicação, assim como o gerenciamento de seus dados.
</p>

## Sumário
- [Dia 1 - Introdução ao Redux - O estado global da aplicação](#dia-1---introdução-ao-redux---o-estado-global-da-aplicação)
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
4. Combinando Reducers

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
