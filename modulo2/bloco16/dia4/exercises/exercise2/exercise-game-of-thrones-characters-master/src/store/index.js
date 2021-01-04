//importe o método applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';
import reducer from '../reducers';

//aplique o middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
