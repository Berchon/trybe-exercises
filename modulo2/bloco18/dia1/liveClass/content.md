---
presentation:
  theme: "black.css"
---

<!-- slide  -->
Context API

<!-- slide vertical=true -->
- Anteriormente, em Front-End...
  - React + Redux
  - Projeto Trivia
- Hoje
  - Context API
- Em um futuro bem próximo...
  - useState e useContext

<!-- slide vertical=true -->
Formalizando...
- createContext
- Provider
- Consumer

<!-- slide -->
Lembram da ISS? 🤔
![station](https://media.giphy.com/media/3o6ZsYTW85Qpbgi6eQ/giphy.gif)

<!-- slide -->
Vamos adaptar o app para funcionar com Context API

<!-- slide -->
Mas antes...
Pq a gente usava Redux mesmo?

<!-- slide -->
Um pouco da evolução do front end...
![evolution](https://media.giphy.com/media/ZujhQwFq8YiWc/giphy.gif)

<!-- slide -->
No fim das contas, como funciona?

<!-- slide -->
TL;DR

<!-- slide -->
1 - Criamos um contexto
`createContext`

<!-- slide -->
2 - Desse contexto temos:

<!-- slide -->
Provider
![lionking](https://media.giphy.com/media/Ms2YW90Qnyv4I/giphy.gif)
"Olhe Simba, tudo isso que o sol toca é o nosso reino" - Mufasa 1994

<!-- slide -->
Consumer
![kirby](https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif)
"Poyo!" - Kirby 1999

<!-- slide -->
Parece um pouco o redux né?

<!-- slide -->
"É igual mas diferente..."
![same](https://media.giphy.com/media/XaFXEwfjd2byt71JHG/giphy.gif)