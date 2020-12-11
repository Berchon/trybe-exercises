# Redux: Use the Spread Operator on ArraysPassed :cow:
<p align="justify">
One solution from ES6 to help enforce state immutability in Redux is the spread operator: .... The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array myArray and write:

</P>

```
let newArray = [...myArray];
```

<p align="justify">
newArray is now a clone of myArray. Both arrays still exist separately in memory. If you perform a mutation like newArray.push(5), myArray doesn't change. The ... effectively spreads out the values in myArray into a new array. To clone an array but add additional values in the new array, you could write [...myArray, 'new value']. This would return a new array composed of the values in myArray and the string 'new value' as the last value. The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array. That is to say, it only provides immutable array operations for one-dimensional arrays.
</P>

---

<p align="justify">
Use the spread operator to return a new copy of state when a to-do is added.
</P>

---

<p align="justify">
:heavy_check_mark: 
The Redux store should exist and initialize with a state equal to [Do not mutate state!].
</p>
<p align="justify">
:heavy_check_mark: 
addToDo and immutableReducer both should be functions.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching an action of type ADD_TO_DO on the Redux store should add a todo item and should NOT mutate state.
</p>
<p align="justify">
:heavy_check_mark: 
The spread operator should be used to return new state.
</p>
