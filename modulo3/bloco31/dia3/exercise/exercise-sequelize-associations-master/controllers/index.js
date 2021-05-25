const {
  getAllPatients,
  createNewPatients,
  getAllPatientsPlans,
  getAllPatientsSurgeries,
} = require('./patientsController');

const {
  getDoctorSurgeries,
} = require('./surgeriesController');

const {
  getAllPatientsByPlanId,
} = require('./plansController');

module.exports = {
  getAllPatients,
  createNewPatients,
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getDoctorSurgeries,
  getAllPatientsByPlanId,
};