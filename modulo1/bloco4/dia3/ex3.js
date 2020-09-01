/*
Semelhante ao ex2. Agora inverta o lado do triângulo.
*/

let n = 5;
let finalizador= n-1;
let frase = "";

for (let j = 0; j < n; j += 1){
    frase = "";
    for (let i = 0; i < n; i += 1){
        if (i >= finalizador){
            frase += "*";
        }
        else {
            frase += " ";
        }
    }
    console.log(frase);
    finalizador -= 1;
}