const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const randomAvatar = require('random-avatar');
  var random = require('random-name')


const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

const PORT = 3000;

const clients = {};

io.on('connection', (socket) => {
  console.log(`novo usuário conectado! ${socket.id}`);

  const newUser = { name: random(), avatar: randomAvatar() };

  clients[socket.id] = newUser;

  socket.emit('confirmConnection', newUser);

  socket.broadcast.emit('newUserConnect', newUser);

  socket.on('sendMessageServer', (message) => {
    const from = clients[socket.id];
    io.emit('sendMessageToClients', { from, message });
  });

  socket.on('disconnect', () => {
    const clientDisconnected = clients[socket.id];
    delete clients[socket.id];
    console.log(`cliente ${clientDisconnected.name} saiu do chat`);

    io.emit('clientExit', clientDisconnected);
  });
});

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

http.listen(PORT, () => console.log('App listening on PORT %s', PORT))