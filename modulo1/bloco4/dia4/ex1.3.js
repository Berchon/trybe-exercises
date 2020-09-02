/*
Faça um for/in que mostre todas as chaves do objeto.
Valor esperado no console:
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

for (keys in info) {
    console.log(keys);
}