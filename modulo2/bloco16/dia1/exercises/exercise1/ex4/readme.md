# Redux: Use a Switch Statement to Handle Multiple Actions :hamster:
<p align="justify">
You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property authenticated. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.
</p>

---

<p align="justify">
The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.
</P>
<p align="justify">
<strong>Note:</strong> At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write a default case in your switch statement that returns the current state. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current state.
</P>

---

<p align="justify">:heavy_check_mark: Calling the function loginUser should return an object with type property set to the string LOGIN.</p>
<p align="justify">:heavy_check_mark: Calling the function logoutUser should return an object with type property set to the string LOGOUT.</p>
<p align="justify">:heavy_check_mark: The store should be initialized with an object with an authenticated property set to false.</p>
<p align="justify">:heavy_check_mark: Dispatching loginUser should update the authenticated property in the store state to true.</p>
<p align="justify">:heavy_check_mark: Dispatching logoutUser should update the authenticated property in the store state to false.</p>
<p align="justify">:heavy_check_mark: The authReducer function should handle multiple action types with a switch statement.</p>