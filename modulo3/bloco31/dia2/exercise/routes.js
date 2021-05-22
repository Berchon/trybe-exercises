const routes = require("express").Router();
const errorMiddleware = require('./middleware/error.js');

const {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  searchBy,
} = require('./controllers');

routes.post('/book', createBook);
routes.get('/book', getBooks);
routes.get('/book/:id', getBookById);
routes.put('/book/:id', updateBookById);
routes.delete('/book/:id', deleteBookById);

routes.get('/search', searchBy);

routes.use(errorMiddleware);

module.exports = routes;
