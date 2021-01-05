export const GET_POSTS = 'GET_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getPosts(json) {
  return { type: GET_POSTS, payload: json };
}

export function requestPosts() {
  return { type: REQUEST_POSTS };
}

export function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchPosts(keyWord) {
  // console.log(keyWord)
  return (dispatch) => {
    dispatch(requestPosts());
    const URL = `https://www.reddit.com/r/${keyWord}.json`
    return fetch(URL)
      .then((result) => result.json())
      .then((json) => dispatch(getPosts(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}