<img alt="capa da trybe" src="/images/CAPA_LINKEDIN_PERFIL_PESSOAL03.png" />
# Repositório dos exercícios resolvidos durante o curso de formação da Trybe

## Sobre a Trybe
<p align="justify">
      A Trybe é uma escola de desenvolvimento web que tem comprometimento genuíno com o sucesso profissional de quem estuda conosco. 
      Com o nosso Modelo de Sucesso    Compartilhado (MSC), a pessoa estudante tem a opção de pagar apenas quando já estiver trabalhando.
</p>

## Descrição
<p align="justify">
      Este repositório é dividido entre os projetos realizados ao longo do curso e em 4 módulos de de exercícios. Cada módulo é dividido em vários blocos e cada bloco subdividido em alguns dias.
</p>
<p align="justify">
      Ao longo do período de formação foram sendo desenvolvidos vários projetos. As especificações de cada projeto encontram-se nos seus respectivos readme.
</p>
<p align="justify">
      Em cada um dos quatro módulos do curso são abordados algumas temáticas descritas a seguir
</p>
<p align="justify">
      Módulo 1 - Fundamentos do Desenvolvimento Web: O objetivo deste primeiro módulo é construir os fundamentos necessários para o início no mundo Desenvolvimento Web.
</p>
<p align="justify">
      Módulo 2 - Desenvolvimento Front-end: Aqui você vai aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e testável.
</p>
<p align="justify">
      Módulo 3 - Desenvolvimento Back-end: Neste módulo, você vai aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.
</p>
<p align="justify">
      Módulo 4 - Ciência da Computação: Aqui, você aprenderá os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvomento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!
</p>
<p align="justify">
      
</p>

## Estrutura do Readme

## Lista de conteúdos abordados no repositório

## Status do andamento

## Lista de tarefas
- [X] Módulo 1
- [ ] Módulo 2
- [ ] Módulo 3
- [ ] Módulo 4
- [ ] Projetos

## Pré-requisitos

## Dependências

## Como rodar a aplicação

## Como rodar os testes


<div class="challenge-instructions redux"><div><section id="description">
<p>After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a <code>reducer</code> function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A <code>reducer</code> takes <code>state</code> and <code>action</code> as arguments, and it always returns a new <code>state</code>. It is important to see that this is the <strong>only</strong> role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.</p>
<p>Another key principle in Redux is that <code>state</code> is read-only. In other words, the <code>reducer</code> function must <strong>always</strong> return a new copy of <code>state</code> and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.</p></section></div><hr><div><section id="instructions">
<p>The code editor has the previous example as well as the start of a <code>reducer</code> function for you. Fill in the body of the <code>reducer</code> function so that if it receives an action of type <code>'LOGIN'</code> it returns a state object with <code>login</code> set to <code>true</code>. Otherwise, it returns the current <code>state</code>. Note that the current <code>state</code> and the dispatched <code>action</code> are passed to the reducer, so you can access the action's type directly with <code>action.type</code>.</p></section></div><hr></div>

<div class="challenge-test-suite"><div aria-label="Pass - <p>Calling the function loginAction should return an object with type property set to the string LOGIN.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.</p></div></div><div aria-label="Pass - <p>The store should be initialized with an object with property login set to false.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>The store should be initialized with an object with property <code>login</code> set to <code>false</code>.</p></div></div><div aria-label="Pass - <p>Dispatching loginAction should update the login property in the store state to true.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.</p></div></div><div aria-label="Pass - <p>If the action is not of type LOGIN, the store should return the current state.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>If the action is not of type <code>LOGIN</code>, the store should return the current state.</p></div></div></div>
