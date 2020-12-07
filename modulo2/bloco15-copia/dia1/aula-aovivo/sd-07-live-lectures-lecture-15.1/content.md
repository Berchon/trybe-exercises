---
presentation:
  theme: "black.css"
---

<!-- slide -->

React Testing Library

<!-- slide vertical=true -->

RTL - Primeiros passos
- Anteriormente, em Front-End...
  - Metodologias ágeis
  - React, props, state, ciclo de vida
- Hoje
  - Primeiros passos no RTL
  - Queries, assíncronicidade e eventos
- Em um futuro bem próximo...
  - Mocks, inputs, router usando RTL
  - Projetin

<!-- slide vertical=true -->
Formalizando...(completar abaixo)
- Queries
  Elas são usadas para capturar as informações de dentro do App. A partir da captura das informações podemos fazer as verificações dos testes.

<!-- slide vertical=true -->
- Componentes assíncronos
  Para esperar os componentes da página carregarem, utilizamos a função waitForDomChange() que espera o componente carregar completamente.

<!-- slide vertical=true -->
- Eventos
  Para ativar eventos nos testes, usamos a função fireEvent, determinando qual evento a ser disparado e também o elemento a ser acionado.

<!-- slide -->

Usamos testes como uma das muitas camadas que garantem a qualidade de código.

<!-- slide -->

Assim como os avaliadores dos projetos que vocês fazem aqui na Trybe, empresas usam o RTL entre outras bibliotecas para garantir que o usuário final tenha uma boa experiência.

<!-- slide -->

RTL é mais uma das várias bibliotecas que aprendemos:
- react
- react-router-dom
- jest
- prop-types

<!-- slide -->

Algumas funções que usaremos hoje:

  - render;
  - cleanup;
  - waitForDomChange;
  - fireEvent;

<!-- slide -->

Exemplo de fluxo do RTL:

```js
import React from 'react';
import { render,
         cleanup,
         fireEvent,
         waitForDomChange } from '@testing-library/react';
import MeuComponente from './MeuComponente';

describe('Minha suite de testes', () => {
  test('Meu teste', async () => {

    const { queryByTestId } = render(<MeuComponente />);

    await waitForDomChange();

    fireEvent.click(queryByTestId('meuBotão'))

    await waitForDomChange();

    expect.(queryByTestId('meuResultado')).toBe('Xablau')

  })
})

```

<!-- slide -->
[RTL CheatSheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
