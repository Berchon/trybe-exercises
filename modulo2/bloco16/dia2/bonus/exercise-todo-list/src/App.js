import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class App extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   listTodo: [],
    // };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    // this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
    this.props.add(todo)
  }

  render() {
    const { listTodo } = this.props; //state;
    return (
      <div className="App">
        <InputTodo /> { /* addTodo={(todo) => this.addTodo(todo)} /> */ }
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}

// addTodo(todo) {
//   this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
// }

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))
});

const mapStateToProps = state => ({
  listTodo: state.listTodo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
