# Redux: Write a Counter with ReduxPassed :bear:

Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding state immutability, but first, here's a review of everything you've learned so far.

---

<p align="justify">
In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!
</P>

---

<p align="justify">
:heavy_check_mark: 
The action creator incAction should return an action object with type equal to the value of INCREMENT
</p>
<p align="justify">
:heavy_check_mark: 
The action creator decAction should return an action object with type equal to the value of DECREMENT
</p>
<p align="justify">
:heavy_check_mark: 
The Redux store should initialize with a state of 0.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching incAction on the Redux store should increment the state by 1.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching decAction on the Redux store should decrement the state by 1.
</p>
<p align="justify">
:heavy_check_mark: 
counterReducer should be a function
</p>
