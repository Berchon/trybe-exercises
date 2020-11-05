/*
Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
*/
const uppercase = require('./ex1.js')

it ('testando se a funcao uppercase funciona', (done) => {
    uppercase('string', (upper) => {
        expect(upper).toBe('STRING');
    });
    done();
});