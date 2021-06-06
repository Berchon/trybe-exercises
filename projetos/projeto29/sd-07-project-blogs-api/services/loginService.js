const { User } = require('../models');
const CustomError = require('../helpers/customError');
const loginValidation = require('../helpers/validations');
const Auth = require('../helpers/authValidations');

const authenticate = async (user) => {
  loginValidation.isLoginValid(user);

  try {
    // se nao encontrar o usuário com a senha newUser será null
    if (!await User.findOne({ where: user })) throw new CustomError(400, 'Invalid fields');
    return { token: Auth.generateToken(user) };
  } catch (err) {
    throw new CustomError(err.status || 500, err.message);
  }
};

module.exports = {
  authenticate,
};