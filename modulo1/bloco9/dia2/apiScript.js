
// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
        document.getElementById('jokeContainer').innerText = data.joke
    )
    .catch(() => 'Erro ao obter a piada');
  }

// const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
// };

//fetch(API_URL, myObject);

// O segundo parâmetro( `myObject` ) define o tipo de request( `method: 'GET'` ) e o formato da resposta( `headers: { 'Accept': 'application/json' }` ), como visto nas requisições via `curl`.

// console.log(fetchJoke());
window.onload = () => fetchJoke();