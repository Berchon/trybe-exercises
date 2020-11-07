/*
Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
*/

let functions = require('./ex5.js');

describe("testando implementações", () => {
    
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
        const mockFirstFunction = jest.spyOn(functions, 'firstFunction')
            .mockImplementation((str) => str.toLowerCase());
        
        expect(functions.firstFunction('TESTE')).toBe('teste');
        expect(functions.firstFunction).toHaveBeenCalled();
        expect(functions.firstFunction).toHaveBeenCalledWith('TESTE');

        functions.firstFunction.mockRestore();
        
        expect(functions.firstFunction('teste')).toBe('TESTE');
        console.log(functions.firstFunction('abc'));

    });

    // test("Restaurando a função original", () => {
    //     functions.firstFunction.mockRestore();
        
    //     expect(functions.firstFunction('teste')).toBe('TESTE');
    //     functions.firstFunction('abc');
    //     expect(functions.firstFunction).toHaveBeenCalled();
    //     expect(functions.firstFunction).toHaveBeenCalledWith('teste');
    // });
});