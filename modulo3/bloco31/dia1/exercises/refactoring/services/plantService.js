let defaultPlants = [
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
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.length;

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
    : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);
};

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id == id);
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== parseInt(id));
  return defaultPlants;
};

const editPlant = (plantId, newPlant) => {
  defaultPlants = defaultPlants.map((plant) => {
    if (plant.id == plantId) {
      newPlant.id = parseInt(plantId);
      return newPlant;
    }
    return plant;
  });
  return defaultPlants;
};

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size
  };
  return newPlant;
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

const needsSun = (plant) => {
  return !!plant.needsSun;
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === parseInt(id);
  });
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
};