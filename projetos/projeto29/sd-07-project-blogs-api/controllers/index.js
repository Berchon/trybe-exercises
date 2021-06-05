const {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require('./userController');

const {
  authenticate,
} = require('./loginController');

const {
  createNewCategory,
  getAllCategory,
} = require('./categoryController');

const {
  createNewPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
} = require('./postController');

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
  authenticate,
  createNewCategory,
  getAllCategory,
  createNewPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
};