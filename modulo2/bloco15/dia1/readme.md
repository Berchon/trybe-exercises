# Dia 1 - RTL - Primeiros passos

## Descrição
<p align="justify">
      Testes automatizados são parte fundamental de qualquer software de qualidade, e com React não é diferente. Sendo React uma biblioteca recente, a melhor forma de se escrever testes automatizados para ele não é um assunto dado como encerrado, ainda que o runner mais usado e recomendado seja o Jest. A biblioteca de testes para React com maior adoção é a enzyme, desenvolvida pela Airbnb. A biblioteca recomendada pela documentação, por outro lado, é a react-testing-library, desenvolvida por Kent C. Dodds. Por razões que ficarão claras ao longo do dia de hoje, nós aprenderemos a usar a react-testing-library
</p>

## Sumário
- [Dia 1 - RTL - Primeiros passos](#dia-1---rtl---primeiros-passos)
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
1. Introdução ao RTL
2. Reforçando o conteúdo
3. Testando apenas um componente.

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
