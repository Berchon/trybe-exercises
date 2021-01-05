import { REQUEST_POSTS, GET_POSTS, FAILED_REQUEST } from '../actions';

const initialState = {
  loading: false,
  post: [],
  error: '',
  };

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case GET_POSTS:
      const titles = (action.payload.data.children.map((item) => item.data.title))
      return { ...state, post: titles, loading: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default reducer;