---
presentation:
  theme: "black.css"
---

<!-- slide -->

React Testing Library

<!-- slide vertical=true -->

RTL - Mocks e Inputs
- Anteriormente, em Front-End...
  - RTL - Queries
  - RTL - Como lidar com componentes assíncronos
  - RTL - Eventos(click)
- Hoje
  - RTL - Eventos(inputs) k
  - RTL - Mocks
- Em um futuro bem próximo...
  - Testar Router usando RTL
  - Projetin

<!-- slide vertical=true -->

Formalizando...
- fireEvent e userEvent
  Uma forma de simular uma interação de um usuário com a aplicação.
  A diferença de um pro outro é que o userEvent simula uma interação mais aproximada de um usuário com a aplicação.

<!-- slide vertical=true -->
- mocks no RTL
  Usamos para simular um comportamento de uma função para que o nosso código não dependa da chamada destas mesmas. Aceleramos o funcionamento dos testes e não dependemos de elementos externos.

<!-- slide -->
Continuando em RTL, 
<img src="https://media.giphy.com/media/3orieKKmYyvUdR3RkY/giphy.gif"
     alt="testing"
     />

<!-- slide -->
Nossos objetivos hoje:
Automatizar e tornar os testes independentes.

<!-- slide -->
Automatização, por que?
<img src="https://media.giphy.com/media/CmFMWpEa4IFtS/giphy.gif"
     alt="rtl automation"
     />

<!-- slide -->
Testes independentes? 🤔

<!-- slide -->
Mock, do inglês: "_Imitar, zombar._"
_- Oliva, Gabriel 2020_
<img src="https://media.giphy.com/media/JAVRaX8OrqgaQ/giphy.gif"
     alt="rtl mocks"
     />

<!-- slide -->
Vamos codar?
