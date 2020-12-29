const INITIAL_STATE = {
  todos: [],
  currentId: 1,
  filter: 'all',
  todosErased: [],
};

const ADD_TODO = 'ADD_TODO';
const CHANGE_PROGRESS = 'CHANGE_PROGRESS';
const ERASE_TASK = 'ERASE_TASK';
const FILTER_TASK = 'FILTER_TASK';

function listTodo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.currentId,
            text: action.text,
            progress: 'todo',
          },
        ],
        currentId: state.currentId + 1,
      };
    case CHANGE_PROGRESS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return (todo.id === action.id) ? {...todo, progress: action.progress} : (todo)
        })
      }
    case ERASE_TASK:
      const indexErase = state.todos.findIndex(todo => (todo.id === action.id))
      if (indexErase === -1) {
        const indexErased = state.todosErased.findIndex(todo => (todo.id === action.id))
        const newStateLeft = state.todosErased.slice(0, indexErased);
        const newStateRigth = state.todosErased.slice(indexErased + 1);
        const todoErased = state.todosErased[indexErased];
        return {
          ...state,
          todosErased: newStateLeft.concat(newStateRigth),
        }
      } else {
        const newStateLeft = state.todos.slice(0, indexErase);
        const newStateRigth = state.todos.slice(indexErase + 1);
        const todoErased = state.todos[indexErase];
        todoErased.progress = 'erase';
        return {
          ...state,
          todos: newStateLeft.concat(newStateRigth),
          todosErased: [...state.todosErased, todoErased],
        }
      }
    case FILTER_TASK:
      return {
        ...state,
        filter: action.filter,
      }
    default:
      return state;
  }
}

export default listTodo;