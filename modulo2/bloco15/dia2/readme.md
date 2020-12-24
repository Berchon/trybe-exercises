# Dia 2 - RTL - Mocks e Inputs

## Descrição
<p align="justify">
      Ter uma boa cobertura de testes aumenta a confiabilidade da sua aplicação, o que significa que também teremos que testar formulários. Para manter uma boa cobertura de testes de maneira sustentável, também é necessário garantir que seus testes executem rápido. É aí que entram os mocks, que nos permitem evitar chamadas reais a APIs e transições CSS, por exemplo, que podem demorar muito e em alguns casos, como na falta de internet, não funcionar adequadamente durante os testes.
</p>

## Sumário
- [Dia 2 - RTL - Mocks e Inputs](#dia-2---rtl---mocks-e-inputs)
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

## Conteúdos abordados nesse dia
1. Antes de começar
2. Mocking Modules
3. Testando inputs em React

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
