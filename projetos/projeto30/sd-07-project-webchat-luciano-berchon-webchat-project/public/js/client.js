// const {
//   uniqueNamesGenerator, starWars, colors, countries, adjectives, animals, languages,
// } = require('unique-names-generator');

// import {
//   uniqueNamesGenerator, starWars, colors, countries, adjectives, animals, languages,
// } from 'unique-names-generator';

const getUser = (id) => {
  const name = `User-${id.toString().substr(0, 11)}`;

  return { name };
};

const client = window.io();

window.onbeforeunload = function () { // (event) {
  client.disconnect();
};

const DATA_TEST_ID = 'data-testid';

const newNicknameElement = document.querySelector('#formChangeNickname');
const newMessage = document.querySelector('#formSendMessage');

newNicknameElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const newNickname = document.querySelector('#changeNicknameInput').value;
  client.nickname = newNickname;
  const { id } = client;
  client.emit('changeNickname', { id, newNickname });
});

newMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const chatMessage = document.querySelector('#messageInput').value;
  const { nickname } = client;
  client.emit('message', { nickname, chatMessage });
});

client.on('changeNickname', ({ id, newNickname }) => {
  document.getElementById(id).innerHTML = newNickname;
});

client.on('newUserConnect', (newUser) => {
  const ul = document.querySelector('#list-users');
  const newElement = document.createElement('li');
  newElement.setAttribute(DATA_TEST_ID, 'online-user');
  newElement.setAttribute('id', newUser.id);
  newElement.innerHTML = newUser.name;
  ul.insertBefore(newElement, ul.lastChild.nextSibling);
});

client.on('iAmConnected', (userId) => {
  const newUser = getUser(userId);
  newUser.id = userId;
  const ul = document.querySelector('#list-users');
  client.nickname = newUser.name;

  client.emit('showMeToTheWorld', newUser);

  const newElement = document.createElement('li');
  newElement.setAttribute(DATA_TEST_ID, 'online-user');
  newElement.setAttribute('id', newUser.id);
  newElement.innerHTML = newUser.name;
  ul.insertBefore(newElement, ul.firstChild);
});

client.on('UserDisconnect', (id) => {
  const el = document.getElementById(id);
  el.remove();
});

client.on('message', (textMessage) => {
  const ul = document.querySelector('#messages');
  const newElement = document.createElement('li');
  newElement.setAttribute(DATA_TEST_ID, 'message');
  newElement.innerHTML = textMessage;
  ul.insertBefore(newElement, ul.lastChild.nextSibling);
});
