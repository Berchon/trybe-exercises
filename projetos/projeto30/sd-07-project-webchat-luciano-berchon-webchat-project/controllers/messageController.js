const Models = require('../models/messagesModel');

const saveMessage = async (message) => Models.saveMessage(message);

const getAllMessage = async ({ users }, res, next) => {
  try {
    const messages = await Models.getAllMessage();
    res.render('index.ejs', { messages, users });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveMessage,
  getAllMessage,
};