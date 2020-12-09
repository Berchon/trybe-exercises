<div><h2 class="text-center challenge-title">Redux: Use Middleware to Handle Asynchronous Actions</h2><div class="challenge-instructions redux"><div><section id="description">
<p>So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description how to use this with Redux.</p>
<p>To include Redux Thunk middleware, you pass it as an argument to <code>Redux.applyMiddleware()</code>. This statement is then provided as a second optional parameter to the <code>createStore()</code> function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes <code>dispatch</code> as an argument. Within this function, you can dispatch actions and perform asynchronous requests.</p>
<p>In this example, an asynchronous request is simulated with a <code>setTimeout()</code> call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.</p>
<p>Remember that you're passing <code>dispatch</code> as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.</p></section></div><hr><div><section id="instructions">
<p>Write both dispatches in the <code>handleAsync()</code> action creator. Dispatch <code>requestingData()</code> before the <code>setTimeout()</code> (the simulated API call). Then, after you receive the (pretend) data, dispatch the <code>receivedData()</code> action, passing in this data. Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.</p></section></div><hr></div></div>

<div class="challenge-test-suite"><div aria-label="Pass - <p>The requestingData action creator should return an object of type equal to the value of REQUESTING_DATA.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.</p></div></div><div aria-label="Pass - <p>The receivedData action creator should return an object of type equal to the value of RECEIVED_DATA.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.</p></div></div><div aria-label="Pass - <p>asyncDataReducer should be a function.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p><code>asyncDataReducer</code> should be a function.</p></div></div><div aria-label="Pass - <p>Dispatching the requestingData action creator should update the store state property of fetching to true.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.</p></div></div><div aria-label="Pass - <p>Dispatching handleAsync should dispatch the data request action and then dispatch the received data action after a delay.</p>" class="test-result"><div class="test-status-icon"><span class="sr-only">Passed</span><svg height="50" viewBox="0 0 200 200" width="50" xmlns="http://www.w3.org/2000/svg"><g><title>Passed</title><circle cx="100" cy="99" fill="var(--primary-color)" r="95" stroke="var(--primary-color)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null"></circle><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(-45, 120, 106.321)" width="128.85878" x="55.57059" y="91.32089"></rect><rect fill="var(--primary-background)" height="30" stroke="var(--primary-background)" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" transform="rotate(45, 66.75, 123.75)" width="80.66548" x="26.41726" y="108.75"></rect></g></svg></div><div aria-hidden="true" class="test-output" xs="10"><p>Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.</p></div></div></div>



const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
