const Model = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

module.exports = async (req, res) => {
  try {
    // const { username } = req.body;
    // const password = req.body.password;
    // const salt = bcrypt.genSaltSync(5)
    // password = bcrypt.hashSync(password, salt);

    const username = await Model.registerUser(
      req.body.username,
      req.body.password
    );
    if (!username) throw Error;
    res.status(201).json({ message: 'Novo usuário', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
