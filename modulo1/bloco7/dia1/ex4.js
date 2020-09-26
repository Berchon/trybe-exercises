let skills = ['Comunicação', 'Liderança', 'Empatia', 'Resiliência', 'Proatividade'];

function change2(phrase, change) {return(phrase.replace(/x/g, change))};

function concat(string) {
    console.log(string)
    return (`${string} Minhas principais habilidades são ${skills.sort()}`)
}
//console.log(change2('xabcx12','COBRA'));

console.log(concat(change2('xabcx12','COBRA')));