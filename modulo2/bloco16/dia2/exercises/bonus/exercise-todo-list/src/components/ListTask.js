import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoButton from './TodoButton';
import './ListTask.css';

class ListTask extends Component {

  filterTodos(todos, filter) {
    if (filter === 'all') {
      return (todos);
    } else if (filter === 'erase'){
      return (this.props.todosErased);
    }

    return (todos.filter(todo => todo.progress === this.props.filter));
  }

  render() {
    const { todos, filter } = this.props;
    return (
      <div className="list-task">
        {
          this.filterTodos(todos, filter).map((element)  => {
            return (
              <div key={ element.id } className="task-item">
                <span className="task-item-text">{ element.text }</span>
                <TodoButton type="todo" id={element.id} progress={element.progress} />
                <TodoButton type="doing" id={element.id} progress={element.progress} />
                <TodoButton type="done" id={element.id} progress={element.progress} />
                <TodoButton type="erase" id={element.id} progress={element.progress} />
              </div>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.listTodo.todos,
  filter: state.listTodo.filter,
  todosErased: state.listTodo.todosErased,
});

export default connect(mapStateToProps)(ListTask);