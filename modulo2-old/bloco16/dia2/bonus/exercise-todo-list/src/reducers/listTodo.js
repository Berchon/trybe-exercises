const INITIAL_STATE = [];

const ADD_TODO = 'ADD_TODO';

function listTodo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default listTodo;