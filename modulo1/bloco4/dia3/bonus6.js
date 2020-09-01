/*
6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let n = 487;

let primo = 0;

for (let i = 2; i < Math.ceil(n / 2); i += 1){
    if ((n % i) == 0){
        primo += 1;
    }
}

if (primo == 0){
    console.log("O número " + n + " é primo.");
}
else{
    console.log("O número " + n + " não é primo.");
}