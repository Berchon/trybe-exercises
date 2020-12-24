# Dia 3 - Usando o Redux no React - Prática

## Descrição
<p align="justify">
      O Redux é uma ferramenta extremamente importante na vida de uma pessoa desenvolvedora front-end. Ainda que demande mais tempo para sua abstração, praticar é a melhor forma de aprender Redux. 
</p>

## Sumário
- [Dia 3 - Usando o Redux no React - Prática](#dia-3---usando-o-redux-no-react---prática)
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
1. Array: eu atualizo ou faço uma cópia?
2. Agora, faça o seguinte exercício em Pair Programming:

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
