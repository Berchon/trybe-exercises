import { createStore, combineReducers } from 'redux';
import changeValueReducer from '../reducers';

const rootReducer = combineReducers({ changeValueReducer });

const store = createStore(rootReducer);

export default store;