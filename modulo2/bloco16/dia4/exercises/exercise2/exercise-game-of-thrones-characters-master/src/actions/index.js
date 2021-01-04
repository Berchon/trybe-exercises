import charAPI from '../services/charAPI';

export const GET_CHARACTER = 'GET_CHARACTER';
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getCharacter(json) {
  return { type: GET_CHARACTER, payload: json };
}

export function requestCharacter() {
  return { type: REQUEST_CHARACTER };
}

export function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchCharacter(character) {
  console.log(character)
  return (dispatch) => {
    dispatch(requestCharacter());
    return charAPI(character)
      .then((json) => dispatch(getCharacter(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
