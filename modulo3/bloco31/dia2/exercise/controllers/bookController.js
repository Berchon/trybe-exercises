const { Book } = require('../models');

const createBook = async (req, res, next) => {
  const book = req.body;
  try {
    const books = await Book.create(book);
    res.status(201).json(books);
  } catch (error) {
    next(error);
  }
};

const getBooks = async (_req, res, next) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC'],
    ],
    });
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBookById = async (req, res, next) => {
  const { id } = req.params;
  const book = req.body;
  try {
    const [updateBook] = await Book.update(book, { where: { id } });

    if(!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(updateBook);
  } catch (error) {
    next(error);
  }
};

const deleteBookById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.destroy({ where: { id } });
    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    next(error);
  }
};

const searchBy = async (req, res, next) => {
  const query = req.query;
  console.log(query)
  const teste = Object.assign(query)
  try {
    const book = await Book.findOne({ where: query });

    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  searchBy,
};