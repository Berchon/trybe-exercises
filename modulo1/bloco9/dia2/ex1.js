const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject);

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        document.getElementById('jokeContainer').innerText = data.joke;
    })
    .catch(() => 'Erro ao obter a piada');
    // .then(response => console.log(response));
};

fetchJoke();
// window.onload = () => fetchJoke();