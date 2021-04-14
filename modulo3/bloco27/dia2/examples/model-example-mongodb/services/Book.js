const Author = require("../models/Author");
const Book = require("../models/Book");

// Método que será chamado quando precisarmos verificar se um livro é válido
const isValid = async (title, authorId) => {
  if (!title || typeof title !== "string" || title.length < 3) return false;
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
  if (
    !authorId ||
    typeof authorId !== "string" ||
    authorId.length !== 24 ||
    !(await Author.findById(authorId))
  ) {
    return false;
  }

  return true;
};

const getAll = async () => {
  return await Book.getAll();
};

const getByAuthorId = async (id) => {
  return await Book.getByAuthorId(id);
};

const getById = async (id) => {
  return await Book.getById(id);
};

const create = async (title, authorId) => {
  const bookIsValid = isValid(title, authorId);

  if (!bookIsValid) return false;

  const { insertedId } = await Book.create(title, authorId);

  return {
    id: insertedId,
    title,
    authorId,
  };
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
