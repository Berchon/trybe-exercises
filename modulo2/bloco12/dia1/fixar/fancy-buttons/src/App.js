import React, { Component } from 'react';
import './App.css'

// com o avanço do exercício essas funções deixaram de ser necessárias
// function handleClick1() {
//   console.log('O botão1 foi clicado');
// }

// function handleClick2() {
//   console.log('O botão2 foi clicado');
// }



class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      click1: 0,
      click2: 0,
      click3: 0,
    }
  }
  handleClick(event) {
    console.log(event.target)
    const { target } = event;
    const { name } = target;
    this.setState((lastState, _props) => {
      return ({ 
        [name]: lastState[name] + 1
      }
      )
    })
    console.log(`O botão ${name} foi clicado ${this.state[name]} vezes!`);
  }

  render() {
    return (
      <div>
        <button name="click1" onClick={this.handleClick}>{this.state.click1}</button>
        <button name="click2" onClick={this.handleClick}>{this.state.click2}</button>
        <button name="click3" onClick={this.handleClick}>{this.state.click3}</button>
      </div>
    );
  }
}

export default App;
