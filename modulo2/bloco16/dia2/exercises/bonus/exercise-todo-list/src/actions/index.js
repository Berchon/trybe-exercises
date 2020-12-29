export const addTodo = (text) => ({ type: 'ADD_TODO', text });

export const changeProgress = (id, progress) => ({ type: 'CHANGE_PROGRESS', id, progress});

export const eraseTask = (id) => ({ type: 'ERASE_TASK', id});

export const filter = (filter) => ({ type: 'FILTER_TASK', filter});