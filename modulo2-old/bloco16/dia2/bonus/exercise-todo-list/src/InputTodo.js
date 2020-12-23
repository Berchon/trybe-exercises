import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value) { // , callback) { }
    this.setState({ textTodo: '' })
    // callback(value)
    this.props.add(value)
  }

  render() {
    // const { addTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input id="btnAdd" type="button" value="Adicionar" onClick={() => this.addItem(textTodo)} /> { /*,addTodo)} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))
});

export default connect(null, mapDispatchToProps)(InputTodo);

// InputTodo.propTypes = {
//   addTodo: PropTypes.func.isRequired,
// }
