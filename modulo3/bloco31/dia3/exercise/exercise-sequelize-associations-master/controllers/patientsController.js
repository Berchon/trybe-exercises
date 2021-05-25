const { Patients, Plans, Surgeries } = require('../models');

const getAllPatients = async (_req, res) => {
  try {
    const patients = await Patients.findAll();
    return res.status(200).json(patients);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu erro!");
  }
};

const createNewPatients = async (req, res) => {
  try {
    const newPatients = await Patients.create(req.body);
    return res.status(200).json(newPatients);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu erro!");
  }
};

const getAllPatientsPlans = async (_req, res) => {
  try {
    const patients = await Patients.findAll({
      include: [{ model: Plans, as: 'plans'}],
    });

    if (!patients.length) {
      return res.status(404).send({ message: 'Nenhum paciente encontrado' });
    }
    
    return res.status(200).json(patients);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu erro!");
  }
};

const getAllPatientsSurgeries = async (req, res) => {
  let config;
  console.log(req.query.doctor, false)
  if (req.query.doctor === 'false') {
    config = {
      model: Surgeries, as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] }, // tira os dados da tabela intermediária (na pratica nao imprime os relacionamentos)
    }
  } else {
    config = {
      model: Surgeries, as: 'surgeries',
      through: { attributes: [] },
    }
  }
  try {
    const patients = await Patients.findAll({
      include: [config],
    });

    if (!patients.length) {
      return res.status(404).send({ message: 'Nenhum paciente encontrado' });
    }
    
    return res.status(200).json(patients);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Deu erro!");
  }
};

module.exports = {
  getAllPatients,
  createNewPatients,
  getAllPatientsPlans,
  getAllPatientsSurgeries,
};