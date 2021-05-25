const { Patients, Plans } = require('../models');

const getAllPatientsByPlanId = async (req, res) => {
  const { id } = req.params;
  try {
    const listOfPatients = await Plans.findAll({
      where: { plan_id: id },
      include: [{
        model: Patients,
        as: 'patients',
        // where: { plan_id: id },
        // through: { attributes: [] },
      }],
    });

    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No plan found' });
    }

    res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro!");
  }
};

module.exports = {
  getAllPatientsByPlanId,
};