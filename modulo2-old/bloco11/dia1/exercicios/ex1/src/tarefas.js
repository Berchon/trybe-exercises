import React, { Component } from 'react';

const task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

const array = ['tarefa 1', 'tarefa 2', 'tarefa 3']
class Tarefas extends Component {
  render() {
    return(<ol>
      { array.map((item, index) => task(item, index)) }
    </ol>)
  }
}

export default Tarefas;