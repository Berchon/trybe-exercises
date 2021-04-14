const Book = require("../services/Book");

const getAll = async (req, res) => {
  // Obtém o ID do autor da query string
  const { author_id } = req.query;

  const books = author_id
    ? // Caso o ID tenha sido informado, busca livros daquele autor
      await Book.getByAuthorId(author_id)
    : // Caso o ID não tenha sido infomado, busca todos os livros
      await Book.getAll();

  // Agora, com os resultados em mão, enviamos o status http e os resultados.
  res.status(200).json(books);
};

const findById = async (req, res) => {
  // Extraímos o id da URL
  const { id } = req.params;

  // Pedimos para o model buscar um livro com esse ID.
  const book = await Book.getById(id);

  // Caso o retorno seja null, ou seja, o livro não existe
  // Retornamos o status 404 Not Found, e uma mensagem de erro
  if (!book) return res.status(404).json({ message: "Book not found" });

  // Caso tenhamos encontrado um livro, retornamos o status 200 OK
  // E o livro encontrado.
  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author_id } = req.body;

  const book = await Book.create(title, author_id);

  if (!book) return res.status(400).json({ message: "Dados inválidos" });

  res.status(201).json(book);
};

module.exports = {
  getAll,
  findById,
  create,
};
