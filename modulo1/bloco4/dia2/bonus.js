/*
ara os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
Copiar
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
Ordene o array numbers em ordem crescente e imprima seus valores;
Ordene o array numbers em ordem decrescente e imprima seus valores;
Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
Copiar

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
*/

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let troca;
for (let i=1; i <= numbers1.length; i += 1){
    for (let j=0; j < i; j += 1){
        if (numbers1[i] < numbers1[j]){
            troca = numbers1[i];
            numbers1[i] = numbers1[j];
            numbers1[j] = troca;
        }
    }
}

console.log(numbers1)

for (let i=1; i <= numbers1.length; i += 1){
    for (let j=0; j < i; j += 1){
        if (numbers2[i] > numbers2[j]){
            troca = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = troca;
        }
    }
}

console.log(numbers2)

let numbers4 = [];
console.log(numbers3);
for (let i = 0; i < numbers3.length; i+= 1){
    if (i != (numbers3.length -1)){
        numbers4.push(numbers3[i] * numbers3[i + 1]);
    }
    else{
        numbers4.push(numbers3[i] * 2);
    }
}

console.log(numbers4);