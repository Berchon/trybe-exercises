/*
Escreva um programa que defina três números em 
variáveis no seu começo e retorne true se pelo 
menos uma das três for par. Caso contrário, 
ele retorna false.

Bonus: use somente um if.
*/

const a = 4;
const b = 1;
const c = 2;
//Eu nao colocaria o if, colocaria direto um 
//console.log(), mas o exercício pede para 
//usar um if
if ((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)){
    console.log("true");
}
else{
    console.log("false");
}