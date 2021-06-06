const { User } = require('../models');
const CustomError = require('../helpers/customError');
const Auth = require('../helpers/authValidations');

const createNewUser = async (user) => {
  // Para fins didáticos resolvi fazer as validações pelo sequelize
  try {
    const newUser = await User.create(user);
    return { token: Auth.generateToken({ email: newUser.email, password: newUser.password }) };
  } catch (err) {
    // tive que usar esse if, pois não consegui mudar essa mensagem pelo sequelize
    if (err.errors[0].type === 'unique violation') {
      throw new CustomError(409, 'User already registered');
    }
    throw new CustomError(400, err.errors[0].message);
  }
};

const getAllUsers = async (authorization) => {
  try {
    await Auth.userAutorization(authorization);
  } catch (error) {
    throw new CustomError(error.status, error.message);
  }

  return User.findAll();
};

const getUserById = async (authorization, id) => {
  try {
    await Auth.userAutorization(authorization);
  } catch (error) {
    throw new CustomError(error.status, error.message);
  }

  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (user) return user;

  throw new CustomError(404, 'User does not exist');
};

const deleteUser = async (authorization) => {
  const user = await Auth.userAutorization(authorization);

  const { id } = user.dataValues;

  await User.destroy({ where: { id } });
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
};