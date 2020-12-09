# Redux: Define an Action Creator :dog:
<code>dispatch</code> method is what you use to dispatch actions to the Redux store. Calling <code>store.dispatch()</code> and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type <code>LOGIN</code>:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

---

The Redux store in the code editor has an initialized state that's an object containing a <code>login</code> property currently set to <code>false</code>. There's also an action creator called <code>loginAction()</code> which returns an action of type <code>LOGIN</code>. Dispatch the <code>LOGIN</code> action to the Redux store by calling the <code>dispatch</code> method, and pass in the action created by <code>loginAction()</code>.

---

<p>:heavy_check_mark: Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.</p>
<p>:heavy_check_mark: The store should be initialized with an object with property <code>login</code> set to <code>false</code>.</p>
<p>:heavy_check_mark: The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.</p>