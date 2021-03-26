# Dia 2 - NodeJS - Fluxo Assíncrono

## Descrição
<p align="justify">
O JavaScript é uma linguagem single-threaded, ou seja, executa apenas uma operação de cada vez. Isso quer dizer que, quando temos uma operação demorada no código, toda vez que essa operação é executada, o JavaScript precisa esperar que ela termine antes de fazer qualquer outra coisa.
Para o navegador, isso significa travar até mesmo a renderização da tela e deixar o usuário sem ação nenhuma durante todo o tempo que essa operação demorar para ser completada. Para o servidor, isso quer dizer não conseguir processar nenhuma outra requisição até que determinada operação termine.
Sendo assim, para que possamos escrever aplicações com boa performance e um boa experiência para o usuário, é importante sabermos como realizar operações demoradas de forma assíncrona, ou seja, fora do contexto de execução do restante do JavaScript. Esse conhecimento pode ser, muitas vezes, a diferença entre escrever um código bom e performático e escrever um código que não funciona, ou é extremamente lento.
</p>

## Sumário
- [Dia 2 - NodeJS - Fluxo Assíncrono](#dia-2---nodejs---fluxo-assíncrono)
- [Descrição](#descrição)
- [Sumário](#sumário)
- [Tecnologias utilizadas nesse dia](#tecnologias-utilizadas-nesse-dia)
- [Conteúdos abordados nesse dia](#conteúdos-abordados-nesse-dia)

## Tecnologias utilizadas nesse dia
- NodeJS

## Conteúdos abordados nesse dia
1. Lendo arquivos com métodos síncronos
2. Lendo arquivos com métodos assíncronos
3. Callbacks
4. Promises
5. Escrevendo dados em arquivos
