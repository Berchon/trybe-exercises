# Insomnia teste

Clique no botão abaixo para importar todas as rotas de testes no seu Insomnia.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Trybe%20-%20Exerc%C3%ADcio%20do%20dia%2031.1&uri=https%3A%2F%2Fraw.githubusercontent.com%2FBerchon%2Ftrybe-exercises%2Fmaster%2Fmodulo3%2Fbloco31%2Fdia1%2Fexercises%2Frefactoring%2FInsomnia_export.json)
# Agora, a prática

Vamos começar criando uma aplicação pequena e aplicando os princípios de SOLID nela para que possamos transformar esse módulo em uma API.
O código que você vai usar como base é o seguinte:
`index.js`

```javascript
const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = () => {
  const plants = JSON.parse(localStorage.getItem("plants"));
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  localStorage.setItem("plants", JSON.stringify(newPlants));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  localStorage.setItem("createdPlants", String(createdPlants));
  localStorage.setItem("plants", JSON.stringify(defaultPlants));
  return defaultPlants;
};
```

Esse módulo, basicamente, controla um catálogo de plantas para um instituto de ciências. Esse código precisa ser adaptado para o padrão SOLID para transformá-lo em uma API, e é isso que você irá fazer.
Foque em dois princípios: `Single Responsibility` e `Dependency Inversion`, esses são os mais importantes.

# Agora vem o exercício de fato

Crie um arquivo separado para as funções, um plants.js (elas virarão nossos controllers).
Remova as interações com localStorage e manipule apenas a variável defaultPlants .
Precisamos ter os endpoints:
* `GET /plants`: retorna todas as plantas;
* `GET /plant/:id`: retorna uma planta com o id;
* `DELETE /plant/:id`: deleta uma planta com o id;
* `PUT /plant/:id`: sobrescreve a planta com id;
* `POST /plant`: cria uma planta nova;
* `GET /sunny/:id`: retorna uma planta que precisa de sol com o id.