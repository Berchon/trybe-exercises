const { Patients, Surgeries } = require('../models');

const getDoctorSurgeries = async (req, res) => {
  try {
    const listOfPatients = await Surgeries.findAll({
      where: { doctor: req.params.name },
      include: [{
        model: Patients,
        as: 'patients',
        through: { attributes: [] },
      }]
    });

    if (listOfPatients === null) {
      return res.status(404).send({ message: 'Este médico nao teve nenhum paciente' });
    }

    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu erro!");
  }
};

module.exports = {
  getDoctorSurgeries,
};