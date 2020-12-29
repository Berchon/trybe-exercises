import React, { Component } from 'react';
import InsertTask from './components/InsertTask';
import ListTask from './components/ListTask';
import Filters from './components/Filters';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.addTodo = this.addTodo.bind(this);
  //   this.state = {
  //     listTodo: [],
  //   };
  // }

  // addTodo(task) {
  //   this.setState((state) => ({ listTodo: [...state.listTodo, task] }));
  // }

  render() {
    return (
      <div className="App">
        <div className="page">
          <header>
            <h1 className="title">To Do List</h1>
            <InsertTask />  {/* addTodo={(todo) => this.addTodo(todo)} /> */}
            <Filters />
          </header>
          <main>
            <ListTask /> {/* listTodo={ this.state.listTodo }/> */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
