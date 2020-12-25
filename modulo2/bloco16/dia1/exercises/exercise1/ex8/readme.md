# Redux: Send Action Data to the StorePassed :koala:
<p align="justify">
By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a type. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.
</P>

---


<p align="justify">
There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.
</P>
<p align="justify">
Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.
</P>
<p align="justify">
The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store state.
</P>

---

<p align="justify">
:heavy_check_mark: 
The action creator addNoteText should return an object with keys type and text.
</p>
<p align="justify">
:heavy_check_mark: 
Dispatching an action of type ADD_NOTE with the addNoteText action creator should update the state to the string passed to the action creator.
</p>
