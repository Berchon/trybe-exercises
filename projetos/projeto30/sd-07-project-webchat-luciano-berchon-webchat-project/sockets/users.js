// const {
//   uniqueNamesGenerator, starWars, colors, countries, adjectives, animals, languages,
// } = require('unique-names-generator');

// const getUser = async () => {
//   const name = uniqueNamesGenerator({
//     dictionaries: [starWars, colors, countries, adjectives, animals, languages],
//     length: 5,
//     separator: '-',
//     style: 'capital',
//   }).substr(0, 16).replace(' ', '-');

//   return { name };
// };

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('iAmConnected', socket.id);

    socket.on('showMeToTheWorld', (newUser) => {
      io.users.push(newUser);
      socket.broadcast.emit('newUserConnect', newUser);
    });

    socket.on('changeNickname', ({ id, newNickname }) => {
      const indexChangeNickname = io.users.findIndex((user) => user.id === id);
      const cris = io.users[indexChangeNickname];
      cris.name = newNickname;
      io.emit('changeNickname', { id, newNickname });
    });

    socket.on('disconnect', () => {
      io.emit('UserDisconnect', socket.id);
      const indexUserDeleted = io.users.findIndex((user) => user.id === socket.id);
      io.users.splice(indexUserDeleted, 1);
    });
  });
  // return io;
};
