const PLUS_VALUE = 'PLUS_VALUE';
const MINUS_VALUE = 'MINUS_VALUE';

const INITIAL_STATE = {
  value: 0,
  clickCount: 0,
  array: [],
};

function changeValueReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case PLUS_VALUE:
      return {
        value: state.value + parseInt(action.value),
        clickCount: state.clickCount + 1,
        array: state.array.concat(parseInt(action.value)),
      };
    case MINUS_VALUE:
      return {
        value: state.value - parseInt(action.value),
        clickCount: state.clickCount + 1,
        array: state.array.concat(parseInt(action.value)),
      };
    default:
      return state;
  }
}

export default changeValueReducer;