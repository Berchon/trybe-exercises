const INITIAL_STATE = [];

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const RESET = 'RESET';

function customer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return ([...state, action.customer]);
      case REMOVE:
        const indexErase = state.findIndex(cust => (cust.name === action.customer.name))
        console.log(indexErase)
        console.log(action.customer)
      const newStateLeft = state.slice(0, indexErase);
      const newStateRigth = state.slice(indexErase + 1);
      return (newStateLeft.concat(newStateRigth));
    case RESET:
      return(INITIAL_STATE);
    default:
      return (state);
  }
}

export default customer;