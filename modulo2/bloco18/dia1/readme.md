# Dia 1 - Context API do React

## Descrição
<p align="justify">
  Essa funcionalidade avançada do React permite que você compartilhe estado entre vários componentes em uma árvore de componentes, sem que seja necessário passá-lo manualmente através de props do componente que o armazena até aquele que de fato o utiliza. É, muitas vezes, usada como alternativa ao Redux.
</p>

## Sumário
- [Dia 1 - Context API do React](#dia-1---context-api-do-react)
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
- Context API

## Conteúdos abordados nesse dia
1. O problema
2. A solução
3. Provider e Consumer
4. Render props
5. Funções em contexto
6. Contexto em componentes de classe

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