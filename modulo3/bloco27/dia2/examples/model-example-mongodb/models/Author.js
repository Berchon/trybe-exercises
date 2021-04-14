const connection = require("./connection");
const { ObjectId } = require("mongodb");

// Converte o nome dos campos de snake_case para camelCase
const convertFields = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection("authors").find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => ({
        id: _id,
        firstName,
        middleName,
        lastName,
      }))
    );
};

const findById = async (id) => {
  return await connection().then((db) =>
    db.collection("authors").findOne(new ObjectId(id))
  );
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) =>
      db.collection("authors").insertOne({ firstName, middleName, lastName })
    )
    .then((result) => result);

module.exports = {
  getAll,
  findById,
  create,
};
