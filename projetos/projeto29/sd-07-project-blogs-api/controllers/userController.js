// const CODES = require('../configurations/statusCodes');

const User = require('../services');

const createNewUser = async (req, res, next) => {
  const { displayName = '', email = '', password = '', image = '' } = req.body;
  const newUser = { displayName, email, password, image };
  try {
    const user = await User.createNewUser(newUser);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const users = await User.getAllUsers(authorization);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  try {
    const user = await User.getUserById(authorization, id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const users = await User.deleteUser(authorization);
    res.status(204).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
