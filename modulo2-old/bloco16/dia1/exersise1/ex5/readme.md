# Redux: Use const for Action TypesPassed :rabbit:
<p align="justify">
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.
</p>

---

<p align="justify">
Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.
</P>
<p align="justify">
<strong>Note:</strong> It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
</P>

---

<p align="justify">
:heavy_check_mark: 
Calling the function loginUser should return an object with type property set to the string LOGIN.
</p>
<p align="justify">
:heavy_check_mark: 
Calling the function logoutUser should return an object with type property set to the string LOGOUT.
</p>
<p align="justify">
:heavy_check_mark: 
The store should be initialized with an object with property login set to false.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching loginUser should update the login property in the store state to true.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching logoutUser should update the login property in the store state to false.
</p>
<p align="justify">
:heavy_check_mark: 
The authReducer function should handle multiple action types with a switch statement.
</p>
<p align="justify">
:heavy_check_mark: 
LOGIN and LOGOUT should be declared as const values and should be assigned strings of LOGINand LOGOUT.
</p>
<p align="justify">
:heavy_check_mark: 
The action creators and the reducer should reference the LOGIN and LOGOUT constants.
</p>
