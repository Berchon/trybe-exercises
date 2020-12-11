# Redux: Register a Store ListenerPassed :frog:
<p align="justify">
Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.
</p>

---

<p align="justify">
Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.
</p>

---


<p align="justify">
:heavy_check_mark: 
Dispatching the ADD action on the store should increment the state by 1.
</p>
<p align="justify">
:heavy_check_mark: 
There should be a listener function subscribed to the store using store.subscribe.
</p>
<p align="justify">
:heavy_check_mark: 
The callback to store.subscribe should also increment the global count variable as the store is updated.
