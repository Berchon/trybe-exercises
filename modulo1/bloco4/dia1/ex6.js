/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals
*/
nomePeca = "CAVALO";

//sei que poderia passar a string para minúscula já no switch
//mas queria deixar explicita essa outra alternativa
//(menos intekigente na minha visão)
switch (nomePeca){
    case "peao":
    case "Peao":
    case "PEAO":
        console.log(nomePeca.toLowerCase() + " => se move um para frente e come um na diagonal");
        break;
    case "torre":
    case "Torre":
    case "TORRE":
        console.log(nomePeca.toLowerCase() + " => se move um para frente e para a lateral");
        break;
    case "cavalo":
    case "Cavalo":
    case "CAVALO":
        console.log(nomePeca.toLowerCase() + " => se move em L");
        break;
    case "bispo":
    case "Bispo":
    case "BISPO":
        console.log(nomePeca.toLowerCase() + " => se move na diagonal");
        break;
    case "rainha":
    case "Rainha":
    case "RAINHA":
        console.log(nomePeca.toLowerCase() + " => se move em qualquer direção");
        break;
    case "rei":
    case "Rei":
    case "REI":
        console.log(nomePeca.toLowerCase() + " => se move uma casa em qualquer direção");
        break;
    default:
        console.log("Não existe essa peça");
}