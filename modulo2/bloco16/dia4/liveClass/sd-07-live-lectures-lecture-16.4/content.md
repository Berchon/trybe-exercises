---
presentation:
  theme: "black.css"
---

<!-- slide  -->
Usando o Redux no React - Parte 2

<!-- slide vertical=true -->
Redux
- Anteriormente, em Front-End...
  - React + Redux
- Hoje

  React&
  Redux&
  Assincronicidade.

- Em um futuro bem próximo...(hoje mesmo)
  - Recesso! 

<!-- slide vertical=true -->
Formalizando...
- redux-thunk


<!-- slide -->
Aprendemos a gerenciar estados usando Redux

<!-- slide -->
Hoje vamos fazer um app que mostra a localização da Estação Epacial Internacional!

![iss](https://media.giphy.com/media/9tx0gy37p7oXu/giphy.gif)

<!-- slide -->
Para conseguir as informações usaremos uma API
```javascript
const ISS_BASE_API = 'http://api.open-notify.org';
//endpoint -> http://api.open-notify.org/iss-now
```

<!-- slide -->
E as bibliotecas
```shell
npm install pigeon-maps@^0.14.0
npm install pigeon-marker@^0.3.4
```
para geolocalização 🌎

<!-- slide -->
Mas,
Redux não funciona usando lógica assíncrona 😕

<!-- slide -->
Como adicionar assincronicidade ao Reux? 🤔

<!-- slide -->
Usaremos `redux-thunk` 
![tank](https://media.giphy.com/media/26gsrjeQrGMriqJdS/giphy.gif)

<!-- slide -->
```bash
npm install redux-thunk
```
O redux-thunk é um middleware (interceptador) que captura as actions antes de chegarem ao reducer.

<!-- slide -->
Na prática...