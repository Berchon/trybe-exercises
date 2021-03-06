# Redux: Define an Action Creator :cat:
<p align="justify">
After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.
</p>

---

<p align="justify">
Define a function named <code>actionCreator()</code> that returns the <code>action</code> object when called.
</p>

---

<p align="justify">:heavy_check_mark: The function <code>actionCreator</code> should exist.</p>
<p align="justify">:heavy_check_mark: Running the <code>actionCreator</code> function should return the action object.</p>
<p align="justify">:heavy_check_mark: The returned action should have a key property type with value <code>LOGIN</code>.</p>