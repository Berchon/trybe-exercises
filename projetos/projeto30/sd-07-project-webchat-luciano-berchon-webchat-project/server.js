const socketIo = require('socket.io');

const http = require('http');

const app = require('./app');

const routes = require('./routes');

require('dotenv').config();

const httpServer = http.createServer(app);

const io = socketIo(httpServer, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

// const httpServer = app.get('httpServer');

const PORT = process.env.PORT || 3000;

io.users = [];

require('./sockets/users')(io);
require('./sockets/message')(io);

// ideia de passar o 'io' por parâmetro foi retirado de:
// https://www.ti-enxame.com/pt/javascript/use-socket.io-nas-rotas-expressjs-em-vez-de-no-arquivo-server.js-principal/835039481/
app.use(routes(io));

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT));
