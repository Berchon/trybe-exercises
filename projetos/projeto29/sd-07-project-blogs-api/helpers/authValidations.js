const jwt = require('jsonwebtoken');

const { User } = require('../models');
const CustomError = require('./customError');

const { JWT_SECRET } = process.env;
// const JWT_SECRET = 'abcde';

const generateToken = (dataObject) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign(dataObject, JWT_SECRET, jwtConfig);
};

const validateToken = async (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new CustomError(401, 'Expired or invalid token');
  }
  const credentials = { email: decoded.email, password: decoded.password };
  const user = await User.findOne({ where: credentials });

  if (!user) throw new CustomError(404, 'the user of this token not found');
  return user;
};

const userAutorization = async (auth) => {
  if (!auth) throw new CustomError(401, 'Token not found');

  return validateToken(auth);
};

module.exports = {
  generateToken,
  userAutorization,
};
