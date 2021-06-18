const connection = require('./connection');

const DB_COLECTION_MESSAGES = process.env.DB_COLECTION_MESSAGES || 'messages';

const saveMessage = async (message) => {
  const db = await connection();
  return db.collection(DB_COLECTION_MESSAGES).insertOne(message);
};

const getAllMessage = async () => {
  const db = await connection();
  return db.collection(DB_COLECTION_MESSAGES).find({}).toArray();
};

module.exports = {
  saveMessage,
  getAllMessage,
};