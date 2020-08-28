/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
*/

let array = [];

for (let i=1; i <= 25; i += 1){
    array.push(i); //poderia ter dividido por 2 aqui, mas acho q nao era a proposta do exercício
}

for (let i=0; i < 25; i += 1){
    array[i] /= 2;
}

console.log(array);