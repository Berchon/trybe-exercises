# Redux: Never Mutate StatePassed :pig:
<p align="justify">

These final challenges describe several methods of enforcing the key principle of state immutability in Redux. Immutable state means that you never modify state directly, instead, you return a new copy of state.
</P>
<p align="justify">
If you took a snapshot of the state of a Redux app over time, you would see something like state 1, state 2, state 3,state 4, ... and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.
</P>
Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a string, number, array, or object. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An array or object, however, is mutable. In practice, your state will probably consist of an array or object, as these are useful data structures for representing many types of information.

---

<p align="justify">
There is a store and reducer in the code editor for managing to-do items. Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from action.todo appended to the end.
</P>

---

<p align="justify">
:heavy_check_mark: 
The Redux store should exist and initialize with a state equal to the todos array in the code editor.
</p>
<p align="justify">
:heavy_check_mark: 
addToDo and immutableReducer both should be functions.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching an action of type ADD_TO_DO on the Redux store should add a todo item and should NOT mutate state.
</p>
