const net = require('net');
const port = 2500;

let countGuest = 0;

const sockets = [];

const broadcastMessage = (from, message) => {
  sockets.forEach((socket) => {
    if (socket.id === from) return;

    socket.write(message);
  })
}

const server = net.createServer((socket) => {
  console.log('Um novo usuário se conectou!');

  countGuest += 1;

  socket.id = `Guest_${countGuest}`;

  sockets.push(socket);

  socket.write(`Bem vindo, ${socket.id}!`);

  socket.on('data', (data) => {
    const message = data.toString('utf-8');
    // socket.write(`${socket.id}: ${message}`);

    broadcastMessage(socket.id, `${socket.id}: ${message}`);
  });

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);

    const message = `${socket.id} deixou o chat`;

    broadcastMessage(socket.id, message);
  })

  broadcastMessage(socket.id, `${socket.id} se conectou`);
});

server.listen(port);