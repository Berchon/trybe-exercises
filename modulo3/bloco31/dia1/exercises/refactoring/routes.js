const routes = require("express").Router();
const errorMiddleware = require('./middleware/error.js');

const {
  getPlants,
  getPlantById,
  deletePlantById,
  updatePlantById,
  createPlant,
  getSunnyPlantById,
} = require('./controllers');

routes.post('/plant', createPlant);
routes.get('/plant', getPlants);
routes.get('/plant/:id', getPlantById);
routes.put('/plant/:id', updatePlantById);
routes.delete('/plant/:id', deletePlantById);
routes.get('/sunny/:id', getSunnyPlantById);

routes.use(errorMiddleware);

module.exports = routes;
