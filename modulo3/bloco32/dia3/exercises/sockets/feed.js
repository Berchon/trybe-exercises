module.exports = (io) => {
  let currentLikes = 0;
  let currentStars = 0;
  
  io.on('connection', (socket) => {
    socket.on('likePost', () => {
      currentLikes += 1;
      // io.emit('likePost', message);
      io.emit('updateLikes', currentLikes);
    });

    socket.on('starPost', () => {
      currentStars += 1;
      socket.broadcast.emit('updateStars', currentStars);
    })

    socket.emit('init', { currentLikes, currentStars });
  });
}