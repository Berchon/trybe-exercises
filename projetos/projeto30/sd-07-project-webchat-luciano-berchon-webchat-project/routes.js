const express = require('express');
const { getAllMessage } = require('./controllers/messageController');

// ideia de receber o 'io' por parâmetro foi retirado de:
// https://www.ti-enxame.com/pt/javascript/use-socket.io-nas-rotas-expressjs-em-vez-de-no-arquivo-server.js-principal/835039481/
module.exports = function (io) {
  const routes = express.Router();

  routes.get('/', (_req, res, next) => {
    getAllMessage(io, res, next);
  });

  return routes;
};
