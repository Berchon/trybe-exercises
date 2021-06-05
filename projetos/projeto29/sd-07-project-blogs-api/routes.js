const routes = require('express').Router();
const errorMiddleware = require('./middleware/error');

const {
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
} = require('./controllers');

routes.post('/user', createNewUser);
routes.get('/user', getAllUsers);
routes.get('/user/:id', getUserById);
routes.delete('/user/me', deleteUser);
routes.post('/login', authenticate);
routes.post('/categories', createNewCategory);
routes.get('/categories', getAllCategory);
routes.post('/post', createNewPost);
routes.get('/post', getAllPost);
routes.get('/post/search', getPostByQuery);
routes.get('/post/:id', getPostById);
routes.put('/post/:id', updatePostById);
routes.delete('/post/:id', deletePostById);

routes.use(errorMiddleware);

module.exports = routes;
