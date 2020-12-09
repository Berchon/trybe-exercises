<div><h2 class="text-center challenge-title">Redux: Never Mutate State</h2><div class="challenge-instructions redux"><div><section id="description">
<p>These final challenges describe several methods of enforcing the key principle of state immutability in Redux. Immutable state means that you never modify state directly, instead, you return a new copy of state.</p>
<p>If you took a snapshot of the state of a Redux app over time, you would see something like <code>state 1</code>, <code>state 2</code>, <code>state 3</code>,<code>state 4</code>, <code>...</code> and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.</p>
<p>Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a <code>string</code>, <code>number</code>, <code>array</code>, or <code>object</code>. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An <code>array</code> or <code>object</code>, however, is mutable. In practice, your state will probably consist of an <code>array</code> or <code>object</code>, as these are useful data structures for representing many types of information.</p></section></div><hr><div><section id="instructions">
<p>There is a <code>store</code> and <code>reducer</code> in the code editor for managing to-do items. Finish writing the <code>ADD_TO_DO</code> case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from <code>action.todo</code> appended to the end.</p></section></div><hr></div></div>


<div class="challenge-test-suite"><div aria-label="Pass - <p>The Redux store should exist and initialize with a state equal to the todos array in the code editor.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.</p></div></div><div aria-label="Pass - <p>addToDo and immutableReducer both should be functions.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p><code>addToDo</code> and <code>immutableReducer</code> both should be functions.</p></div></div><div aria-label="Pass - <p>Dispatching an action of type ADD_TO_DO on the Redux store should add a todo item and should NOT mutate state.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.</p></div></div></div>




const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
