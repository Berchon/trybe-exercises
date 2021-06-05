// const CODES = require('../configurations/statusCodes');

const Category = require('../services');

const createNewCategory = async (req, res, next) => {
  const { authorization } = req.headers;
  const { name = '' } = req.body;
  try {
    const newCategory = await Category.createNewCategory(authorization, name);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const getAllCategory = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const categories = await Category.getAllCategory(authorization);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewCategory,
  getAllCategory,
};
