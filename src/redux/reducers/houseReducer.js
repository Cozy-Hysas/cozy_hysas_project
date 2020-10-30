import {
	ADD_HOUSE,
	FETCH_HOUSES,
	FILTER_HOUSES,
	SELECT_HOUSE,
} from '../actions/types';

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
		case FETCH_HOUSES: {
			return { ...state, listOfHouses: action.payload };
		}
		case FILTER_HOUSES: {
			return { ...state, listOfHouses: action.payload };
		}
		case SELECT_HOUSE: {
			return { ...state, house: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default houseReducer;
