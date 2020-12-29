import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import './InsertTask.css';

class InsertTask extends Component {
  constructor() {
    super();
    // Retirado do stackoverflow
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.focus();
  }

  focus() {
    // document.getElementsByClassName('add-task-text')[0].focus();
    this.textInput.current.focus();
  }

  addTask(task) { // , callBack) {
    if (this.state.text !== '') {
      // callBack(task);
      this.props.add(task);
      this.setState({ text: '' });
    }
    this.focus();
    return;
  }

  handleChangeText(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    // const { addTodo } = this.props;
    const task = this.state.text;
    return (
      <div className="add-task">
        <input
          className="add-task-text"
          maxLength="60"
          value={ task }
          onChange={(event) => this.handleChangeText(event) }
          type="text"
          ref={this.textInput}
          placeholder="Insira alguma tarefa" />
        <input
          className="add-task-button"
          onClick={() => this.addTask(task)} // , addTodo) }
          type="button"
          value=" + " />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: text => dispatch(TodoActions.addTodo(text))
});

export default connect(null, mapDispatchToProps)(InsertTask);