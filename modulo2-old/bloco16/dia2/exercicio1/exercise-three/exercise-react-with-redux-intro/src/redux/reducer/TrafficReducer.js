import { CHANGE_SIGNAL } from '../actions/TrafficAction';

const initialState = {
  signal: {
    color: 'red',
  },
}

function TrafficReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

export default TrafficReducer;