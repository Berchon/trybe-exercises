const {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require('./userService');

const {
  authenticate,
} = require('./loginService');

const {
  createNewCategory,
  getAllCategory,
} = require('./categoryService');

const {
  createNewPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
} = require('./postService');

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