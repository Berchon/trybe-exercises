const connection = require('./connection');
const { ObjectID } = require("mongodb");

const getAll = () => connection().then(db => db.collection('participants').find({}).toArray());

const getById = (id) => connection().then(db => db.collection('participants')
  .findOne({ _id: ObjectID(id) }));

const updateVote = (id) => connection().then(db => db.collection('participants')
  .updateOne(
    { _id: ObjectID(id) },
    { $inc: { votes: 1} },
  ));

module.exports = {
  getAll,
  getById,
  updateVote,
}