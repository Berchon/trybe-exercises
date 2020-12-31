const INITIAL_STATE = {
  user: '',
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

function authenticate(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return ({ user: action.user });
    case LOGOUT:
      return (INITIAL_STATE);
    default:
      return (state);
  }
}

export default authenticate;