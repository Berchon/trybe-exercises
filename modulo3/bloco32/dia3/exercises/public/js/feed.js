const socket = window.io();

window.onbeforeunload = function(event) {
  socket.disconnect();
};

const like = document.querySelector('#likeIcon');
const star = document.querySelector('#starIcon');

like.addEventListener('click', () => {
  socket.emit('likePost');
});

star.addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});

socket.on('updateLikes', (countLikes) => {
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});

socket.on('init', ({ currentLikes, currentStars }) => {
  document.querySelector('#currentLikes').innerHTML = currentLikes;
  document.querySelector('#currentStars').innerHTML = currentStars;
});
