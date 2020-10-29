import { combineReducers } from 'redux';
import houseReducer from './houseReducer';

const RootReducer = combineReducers({ house: houseReducer });

export default RootReducer;
