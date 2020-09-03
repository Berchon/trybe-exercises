/*
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/

function verificaPalindromo(palavra){
    palavraInvertida = "";
    for (let i = (palavra.length - 1); i >= 0; i -= 1) {
        palavraInvertida += palavra[i];
    }
    console.log(palavra);
    console.log(palavraInvertida);
    let retorno = false
    if (palavra ===palavraInvertida) {
        retorno = true;
    }

    return (retorno);
}

console.log(verificaPalindromo("arara"));