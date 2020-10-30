import { ADD_HOUSE, FILTERED_HOUSES } from '../actions/types';

const initialState = {
	house: {
		title: '',
		imageUrl: '',
		description: '',
		adress: '',
		price: 0,
		startDate: null,
		endDate: null,
	},
	listOfHouses: [],
};

const houseReducer = function (state = initialState, action) {
	switch (action.type) {
		case ADD_HOUSE: {
			return { ...state, house: action.payload };
		}
		case FILTERED_HOUSES: {
			return { ...state, listOfHouses: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default houseReducer;
