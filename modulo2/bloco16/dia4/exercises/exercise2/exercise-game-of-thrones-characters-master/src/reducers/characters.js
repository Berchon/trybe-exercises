import { REQUEST_CHARACTER, GET_CHARACTER, FAILED_REQUEST } from '../actions';

const initialState = {
  loading: false,
  character: {
      name: '',
      gender: '',
      aliases: [],
      books: [],
  },
  error: '',
  };

function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true };
    case GET_CHARACTER:
      return { ...state, character: action.payload[0], loading: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default reducer;
