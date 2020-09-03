/*
Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false

*/

function wordCheck(word, ending) {
    let endWord = "";
    for (let i = ending.length; i > 0; i -= 1) {
        endWord += word[word.length - i];
    }
    if (endWord == ending){
        return (true);
    }
    return (false);
}

console.log(wordCheck("trybe", "be"));