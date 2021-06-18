const moment = require('moment');
const { saveMessage } = require('../controllers/messageController');

module.exports = (io) => {
  io.on('connection', async (socket) => {
    socket.on('message', (message) => {
      // Clamar o controller aqui
      saveMessage({
        message: message.chatMessage,
        nickname: message.nickname,
        timestamp: moment().format('yyyy-MM-DD HH:mm:ss'),
      });
      io.emit(
        'message',
        `${moment().format('DD-MM-yyyy HH:mm:ss')} ${message.nickname} ${message.chatMessage}`,
      );
    });
  });
};
