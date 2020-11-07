/*
1 Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:
Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().

2 Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.

3 Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
*/

let fixar = require('./fixar-1.js');
let { randomNumber, isDivisible } = fixar;
test("randomNumber é chamada quando invocamos isDivisible?", () => {
    randomNumber = jest.fn()
        .mockReturnValue(2)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4);
    
    console.log(fixar.isDivisible(2))
    console.log(fixar.isDivisible(2))
    //isDivisible()
    expect(fixar.randomNumber).toHaveBeenCalledTimes(2);
    expect(fixar.randomNumber).toHaveBeenCalled();
});