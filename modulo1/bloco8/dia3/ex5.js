// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA(names) {
    return (names.reduce((sum, name) => {
        sum += name.match(/a/ig).length;
        return (sum)
    }, 0))
}
// console.log(containsA(names))
assert.deepEqual(containsA(names), 20);

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.