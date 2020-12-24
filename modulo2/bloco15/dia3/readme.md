# Dia 3 - RTL - Testando React Router

## Descrição
<p align="justify">
Aprendendo a testar rotas, vamos ter meios de fazer nossos testes navegarem pela aplicação, então podemos escrever testes imaginando como o usuário vai usar a página, isto nos possibilita testar o fluxo de uso do programa.
</p>
<p align="justify">
Outra opção que ganhamos ao aprender a testar rotas, é que podemos testar páginas de maneira separada, o que é ótimo para se certificar de que os componentes de uma página fazem exatamente o que se espera deles.
</p>

## Sumário
- [Dia 3 - RTL - Testando React Router](#dia-3---rtl---testando-react-router)
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
1. Testando React Router

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
