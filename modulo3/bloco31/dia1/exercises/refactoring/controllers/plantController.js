const Services = require('../services/plantService');

const getPlants = async (_req, res, next) => {
  try {
    const plants = await Services.getPlants();
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

const getPlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plants = await Services.getPlantById(id);
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

const deletePlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plants = await Services.removePlantById(id);
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

const updatePlantById = async (req, res, next) => {
  const { id } = req.params;
  const plant = req.body;
  try {
    const plants = await Services.editPlant(id, plant);
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

const createPlant = async (req, res, next) => {
  const plant = req.body;
  try {
    const plants = await Services.createNewPlant(plant);
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

const getSunnyPlantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plants = await Services.getPlantsThatNeedsSunWithId(id);
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPlants,
  getPlantById,
  deletePlantById,
  updatePlantById,
  createPlant,
  getSunnyPlantById,
};