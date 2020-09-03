/*
Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
Copiar
     | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
*/

function equivalencia(letter) {
    let equiv = [
        {romano: "I", arabico: "1"},
        {romano: "V", arabico: "5"},
        {romano: "X", arabico: "10"},
        {romano: "L", arabico: "50"},
        {romano: "C", arabico: "100"},
        {romano: "D", arabico: "500"},
        {romano: "M", arabico: "1000"},
    ]

    let num = 0;
    for (i = 0; i < equiv.length; i += 1) {
        if (equiv[i].romano == letter) {
            num = equiv[i].arabico;
            break;
        }
    }
    return (num);
}

function convertArabic(string){
    let num = 0;

    for (let i = 0; i < string.length; i += 1) {
        if (string.length == 1){  //para pegar o caso de uma letra
            num = equivalencia(string);
        }
        else if (i < string.length - 1) { // essa condicao eh pra nao peggar o ultimo elemento
            if (!testBigger(string[i], string[i+1])) { // se string[i+1]>string[i]
                num += parseInt(equivalencia(string[i+1])) - parseInt(equivalencia(string[i]));
                i += 1;
            }
            else {
                num += parseInt(equivalencia(string[i]));
            }
        }
        else {
            num += parseInt(equivalencia(string[i]));
        }
    }
    return (num);
}

function testBigger(val1, val2){
    let equiv = [
        {romano: "I", arabico: "1"},
        {romano: "V", arabico: "5"},
        {romano: "X", arabico: "10"},
        {romano: "L", arabico: "50"},
        {romano: "C", arabico: "100"},
        {romano: "D", arabico: "500"},
        {romano: "M", arabico: "1000"},
    ]
    for (let i = 0; i < equiv.length; i += 1){
        if (equiv[i].romano == val2) {
            return (true); val1 > val2
        }
        else if (equiv[i].romano == val1) {
            return(false); //val2 > val1
        }
    }
}
//console.log(testBigger("L", "I"));
console.log(convertArabic("MMMCMLXXXVII"));