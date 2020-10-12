// Dada uma matriz de matrizes, transforme em uma única matriz.

    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten(arrays) {
    return (arrays.reduce((acc, value) => acc.concat(value), []))
}

assert.deepEqual(flatten(arrays), ["1", "2", "3", true, 4, 5, 6]);

// Dada uma matriz de matrizes, transforme em uma única matriz.