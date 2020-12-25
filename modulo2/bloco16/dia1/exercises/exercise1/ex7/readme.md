# Redux: Combine Multiple ReducersPassed :tiger:
<p align="justify">
When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: all app state is held in a single state object in the store. Therefore, Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux createStore() method.
</p>
<p align="justify">
In order to let us combine multiple reducers together, Redux provides the combineReducers() method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.
</p>
<p align="justify">
Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the combineReducers() method like this:
</p>

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```
</p>
<p align="justify">
Now, the key notes will contain all of the state associated with our notes and handled by our notesReducer. This is how multiple reducers can be composed to manage more complex application state. In this example, the state held in the Redux store would then be a single object containing auth and notes properties.
</p>

---

<p align="justify">
There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store. Finish writing the rootReducer() function using the Redux.combineReducers() method. Assign counterReducer to a key called count and authReducer to a key called auth.
</p>

---



<p align="justify">
:heavy_check_mark: 
The counterReducer should increment and decrement the state.
</p>
<p align="justify">
:heavy_check_mark: 
The authReducer should toggle the state of authenticated between true and false.
</p>
<p align="justify">
:heavy_check_mark: 
The store state should have two keys: count, which holds a number, and auth, which holds an object. The auth object should have a property of authenticated, which holds a boolean.
</p>
<p align="justify">
:heavy_check_mark: 
The rootReducer should be a function that combines the counterReducer and the authReducer.
</p>
