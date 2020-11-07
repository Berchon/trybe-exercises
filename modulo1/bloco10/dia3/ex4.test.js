/*
Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
*/

let functions = require('./ex4.js');

jest.mock('./ex4.js');

describe("testando implementações", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
        functions.firstFunction.mockImplementation((str) => str.toLowerCase());
        // console.log(functions.firstFunction('ABC'))
        expect(functions.firstFunction('TESTE')).toBe('teste');
        expect(functions.firstFunction).toHaveBeenCalled();
        expect(functions.firstFunction).toHaveBeenCalledWith('TESTE');
    });

    test("mockando função que recebe um parâmetro e retorna a última letra", () => {
        functions.secondFunction.mockImplementation(str => str.charAt(str.length - 1));
        expect(functions.secondFunction('TESTE')).toBe('E');
        expect(functions.secondFunction).toHaveBeenCalled();
        expect(functions.secondFunction).toHaveBeenCalledWith('TESTE');
    });

    test("mockando função que recebe 3 parâmetros e os concatena", () => {
        functions.thirdFunction.mockImplementation((str1, str2, str3) => str1.concat(str2).concat(str3));
        expect(functions.thirdFunction('a', 'b', 'c')).toBe('abc');
        expect(functions.thirdFunction).toHaveBeenCalled();
        expect(functions.thirdFunction).toHaveBeenCalledWith('a', 'b', 'c');
      });
});