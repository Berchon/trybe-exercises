/*
5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
*/

let n=9;
let string = "";
let numeroDoMeio = Math.ceil(n/2)

for (let i = 1; i <= numeroDoMeio; i+=1){
    //i=2
    string = "";
    for (let k = 1; k <= n; k++){
        if ((k == (numeroDoMeio - (i-1))) || (k ==numeroDoMeio + (i-1)) || i == numeroDoMeio){
//           k=1 < (3-1) || 1 > (3+ 1)
            string += "*";
        }
        else{
            string += " ";
        }
    }
    console.log(string);
}