import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import todoImage from '../images/todo.svg';
import doingImage from '../images/doing.svg';
import doneImage from '../images/done.svg';
import eraseImage from '../images/erase.svg';
import './Buttons.css';

class TodoButton extends Component {
  
  todo(id, progress) {
    return (
      <img
        onClick={() => this.props.changeProgress(id, 'todo')}
        src={todoImage} // nao sei pq, mas nao funcionou colocando props aqui
        alt="Tarefa por fazer"
        className={`images ${(progress === 'todo') ? 'todo-border' : ''}`}
      />
    );
  }

  doing(id, progress) {
    return (
      <img
        onClick={() => this.props.changeProgress(id, 'doing')}
        src={doingImage} // nao sei pq, mas nao funcionou colocando props aqui
        alt="Tarefa sendo feita"
        className={`images ${(progress === 'doing') ? 'doing-border' : ''}`}
      />
    );
  }

  done(id, progress) {
    return (
      <img
        onClick={() => this.props.changeProgress(id, 'done')}
        src={doneImage} // nao sei pq, mas nao funcionou colocando props aqui
        alt="Tarefa concluída"
        className={`images ${(progress === 'done') ? 'done-border' : ''}`}
      />
    );
  }

  erase(id, progress) {
    return (
      <img
        onClick={() => this.props.eraseTask(id)}
        src={eraseImage} // nao sei pq, mas nao funcionou colocando props aqui
        alt="Excluir tarefa"
        className={`images ${(progress === 'erase') ? 'erase-border' : ''}`}
      />
    );
  }

  render() {
    const { id, progress, type } = this.props
    switch (type) {
      case 'todo':
        return(this.todo(id, progress))
      case 'doing':
        return(this.doing(id, progress))
      case 'done':
        return(this.done(id, progress))
      case 'erase':
        return(this.erase(id, progress))
      default:
        return;
    }
    
  }
}

const mapDispatchToProps = dispatch => ({
  changeProgress: (id, progress) => dispatch(TodoActions.changeProgress(id, progress)),
  eraseTask: (id) => dispatch(TodoActions.eraseTask(id)),
});

const mapStateToProps = (state) => ({
  todos: state.listTodo.todos,
  // filter: state.listTodo.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoButton);
