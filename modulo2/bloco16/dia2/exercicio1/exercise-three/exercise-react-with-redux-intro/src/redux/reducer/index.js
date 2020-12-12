import { combineReducers } from 'redux';
import TrafficReducer from './TrafficReducer';
import CarReducer from './CarReducer';

const rootReducer = combineReducers({ TrafficReducer, CarReducer });

export default rootReducer;