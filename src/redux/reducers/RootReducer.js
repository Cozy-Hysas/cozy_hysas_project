import { combineReducers } from 'redux';
import houseReducer from './houseReducer';
import userReducer from './userReducer';

const RootReducer = combineReducers({ house: houseReducer, user: userReducer });

export default RootReducer;
