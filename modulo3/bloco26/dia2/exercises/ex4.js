/*
4. Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
  - Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
  1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
  2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
  5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
  6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
*/

const fs = require('fs').promises;

async function readFile(filename) {
  return await fs.readFile(filename, 'utf-8')
    .then(text => JSON.parse(text))
    // .then(data => console.log(data[0]))
    .catch(new Error("Erro ao ler o arquivo"));
  };
  
async function printAll(filename) {
  const array = await readFile(filename);
  const listNames = array.map(({ id, name }) => `${ id }- ${ name }`);
  listNames.forEach(name => {
    console.log(name);
  });
}

async function findById(filename, ID) {
  const array = await readFile(filename);
  const promisse = await new Promise((resolve, reject) => {
    const object = array.find((item) => item.id === ID);
    if (object) resolve(object);
    reject(new Error("Personagem não encontrado!"));
  });
  try {
    console.log(promisse);
  } catch (err) {
    console.log(err.message);
  }
  // return promisse;
}

async function deleteById(filename, IDs) {
  const array = await readFile(filename);
  const promisse = await new Promise((resolve, reject) => {
    const object = array.filter((item) => {
      return !IDs.includes(item.id) 
    });
    if (object) resolve(object);
    reject(new Error("Personagem não encontrado!"));
  });
  try {
    console.log(promisse);
  } catch (err) {
    console.log(err.message);
  }
}

async function createSimpsonsFamily(filename) {
  const simpsons = await readFile(filename);

  const simpsonsFamily = simpsons.filter(simpson => ["1", "2", "3", "4"].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addToFamily(filename, id, name) {
  const simpsonsFamily = await readFile(filename);

  simpsonsFamily.push({ "id": id,"name": name });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function removeToFamily(filename, ID) {
  const simpsonsFamily = await readFile(filename);

  const newFaMILY = simpsonsFamily.map(({ id }) => id !== ID);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}


// printAll('./simpsons.json');
// findById('./simpsons.json', "2");
// deleteById('./simpsons.json', ["6", "10"]);
// createSimpsonsFamily('./simpsons.json');
// addToFamily('./simpsonsFamily.json', "8", "Nelson Muntz");
removeToFamily('./simpsonsFamily.json', "8");
addToFamily('./simpsonsFamily.json', "5", "Maggie Simpson");
