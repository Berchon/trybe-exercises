# Dia 4 - Usando o Redux no React - Actions Assíncronas

## Descrição
<p align="justify">
      Na sua carreira de desenvolvimento operações assíncronas serão extremamente recorrentes. Agora que você está usando Redux , vai ser comum você precisar salvar na store algum dado que veio de forma assíncrona (um endpoint que retorna informações do usuário logado, para que esteja disponível para sua aplicação, por exemplo).
</p>
<p align="justify">
      Tal necessidade, por si só, não é sanada pelo pacote Redux, haja visto que ele suporta somente fluxo síncrono de dados. Isso faz com que seja necessário fazer uso de outros pacotes, entre eles o mais popular: redux-thunk. Tal pacote provê uma interface simples para dar suporte a action creators que geram actions assíncronas, e é ele que você aprenderá para tornar sua aplicação mais completa.
</p>

## Sumário
- [Dia 4 - Usando o Redux no React - Actions Assíncronas](#dia-4---usando-o-redux-no-react---actions-assíncronas)
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
1. redux-thunk
2. Exemplos guiados

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
