import {} from '../actions/types';

const initialState = {};

const userReducer = function (state = initialState, action) {
	switch (action.type) {
		/* 		case ADD_HOUSE: {
			return { ...state, house: action.payload };
		} */
		default: {
			return state;
		}
	}
};

export default userReducer;
