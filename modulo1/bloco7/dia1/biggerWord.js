longestWord(phrase) => {
    let words = phrase.split(' ');
    
    let bigWordIndex = 0;
    for (index in words) {
        if (words[index].length > words[bigWordIndex].length) {
            bigWordIndex = index;
        }
    }
    console.log(words[bigWordIndex]);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'