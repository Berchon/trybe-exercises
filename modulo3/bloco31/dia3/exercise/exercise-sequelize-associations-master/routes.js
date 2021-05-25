const routes = require("express").Router();

const {
  getAllPatients,
  createNewPatients,
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getDoctorSurgeries,
  getAllPatientsByPlanId,
} = require('./controllers');

routes.get('/patient', getAllPatients);
routes.post('/patient', createNewPatients);
routes.get('/patient/plans', getAllPatientsPlans);
routes.get('/patient/surgeries', getAllPatientsSurgeries);
routes.get('/surgeries/:name', getDoctorSurgeries);
routes.get('/plan/:id', getAllPatientsByPlanId);

module.exports = routes;