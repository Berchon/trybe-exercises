# Redux: Copy an Object with Object.assignPassed :monkey:
<p align="justify">
The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an object, too. A useful tool for handling objects is the Object.assign() utility. Object.assign() takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:
</P>

```
const newObject = Object.assign({}, obj1, obj2);
```

<p align="justify">
This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.
</P>

---

<p align="justify">
The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.
</P>

---

<p align="justify">
:heavy_check_mark: 
The Redux store should exist and initialize with a state that is equivalent to the defaultState object declared on line 1.
</p>
<p align="justify">
:heavy_check_mark: 
wakeUp and immutableReducer both should be functions.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching an action of type ONLINE should update the property status in state to online and should NOT mutate state.
</p>
<p align="justify">
:heavy_check_mark: 
Object.assign should be used to return new state.
</p>
