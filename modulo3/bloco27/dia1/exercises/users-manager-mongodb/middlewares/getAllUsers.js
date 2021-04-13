const rescue = require('express-rescue');
const UserModel = require("../models/user");

module.exports = rescue(async (_req, res, _next) => {
  console.log("teste")
  // Pedimos para o model buscar todos os usuários
  const users = await UserModel.findAll();
  
  // Como o `find` sempre retorna um Array, não precisamos nos preocupar:
  // caso nenhum resultado seja encontrado, o próprio MongoDB retornará um array vazio
  res.status(200).json(users);
});

// module.exports = {
//   getAllUsers,
// };
