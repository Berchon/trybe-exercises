const { Category } = require('../models');

const CustomError = require('../helpers/customError');
const Auth = require('../helpers/authValidations');

const createNewCategory = async (authorization, name) => {
  try {
    await Auth.userAutorization(authorization);
  } catch (error) {
    throw new CustomError(error.status, error.message);
  }

  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (err) {
    // tive que usar esse if, pois não consegui mudar essa mensagem pelo sequelize
    if (err.errors[0].type === 'unique violation') {
      throw new CustomError(409, 'Category already registered');
    }
    throw new CustomError(400, err.errors[0].message);
  }
};

const getAllCategory = async (authorization) => {
  try {
    await Auth.userAutorization(authorization);
  } catch (error) {
    throw new CustomError(error.status, error.message);
  }

  return Category.findAll({ order: [['id', 'ASC']] });
};

module.exports = {
  createNewCategory,
  getAllCategory,
};