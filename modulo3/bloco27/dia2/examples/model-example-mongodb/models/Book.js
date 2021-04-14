// Chamamos a conexão com o banco para poder executar nossa query.
const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Função que retorna todos os livros cadastrados
const getAll = () => connection()
  // Realizamos o `find` de forma muito parecida com o que fazemos no mongo shell,
  // mas, ao invés de `db.books.find`, fazemos `db.collection('books').find`.
  .then((db) => db.collection('books').find({}).toArray())

const getByAuthorId = (authorId) => {
  return connection()
  // Novamente, temos um `find` simples, dessa vez utilizando um filtro por ID do autor
  .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray())
}

const getById = async (id) => {
  const book = await connection()
    // Aqui é importante notar que a rota já deve ter verificado que `id` é uma string hexadecimal
    // de 24 caracteres. Caso contrário, receberemos um erro ao converter o id para `ObjectId`.
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  
    // Caso o livro não seja encontrado, retornamos `null`.
    if (!book) return null;
  
    // Caso o livro seja encontrado, retornamos seus dados.
    return book;
  }

// Método que cria um novo livro no banco
const create = (title, authorId) => connection()
  // Utilizamos o `insertOne` normalmente para inserir um registro no banco
  .then((db) => db.collection('books').insertOne({ title, authorId }))


// Por último, exportamos a função `getAll` para que ela possa ser usada em outros lugares
module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
}
