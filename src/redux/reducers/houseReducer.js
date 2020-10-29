import { ADD_HOUSE } from '../actions/types';

const initialState = {};

const houseReducer = function (state = initialState, action) {
	switch (action.type) {
		case ADD_HOUSE: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default houseReducer;
