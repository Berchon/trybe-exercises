<div><h2 class="text-center challenge-title">Redux: Send Action Data to the Store</h2><div class="challenge-instructions redux"><div><section id="description">
<p>By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a <code>type</code>. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.</p></section></div><hr><div><section id="instructions">
<p>There's a basic <code>notesReducer()</code> and an <code>addNoteText()</code> action creator defined in the code editor. Finish the body of the <code>addNoteText()</code> function so that it returns an <code>action</code> object. The object should include a <code>type</code> property with a value of <code>ADD_NOTE</code>, and also a <code>text</code> property set to the <code>note</code> data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.</p>
<p>Next, finish writing the <code>switch</code> statement in the <code>notesReducer()</code>. You need to add a case that handles the <code>addNoteText()</code> actions. This case should be triggered whenever there is an action of type <code>ADD_NOTE</code> and it should return the <code>text</code> property on the incoming <code>action</code> as the new <code>state</code>.</p>
<p>The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store <code>state</code>.</p></section></div><hr></div></div>

<div class="challenge-test-suite"><div aria-label="Pass - <p>The action creator addNoteText should return an object with keys type and text.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.</p></div></div><div aria-label="Pass - <p>Dispatching an action of type ADD_NOTE with the addNoteText action creator should update the state to the string passed to the action creator.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.</p></div></div></div>



const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
