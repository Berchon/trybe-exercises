/*
Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

for (keys in info) {
    console.log(info[keys]);
}