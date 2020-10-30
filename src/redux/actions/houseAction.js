import { ADD_HOUSE, FETCH_HOUSES, FILTER_HOUSES, SELECT_HOUSE } from './types';
import axios from 'axios';

export const addHouse = (newHouse) => (dispatch) => {
	axios.post('/house/addHouse', newHouse).then((response) => {
		dispatch({ type: ADD_HOUSE, payload: newHouse });
	});
};
export const fetchHouses = () => (dispatch) => {
	axios.get('/house').then((response) => {
		dispatch({ type: FETCH_HOUSES, payload: response.data });
	});
};

export const filterHouseByAddress = (address) => (dispatch) => {
	axios.get('/house').then((response) => {
		var filteredHousesByAddress = [];
		for (var i = 0; i < response.data.length; i++) {
			if (response.data[i].address.includes(address)) {
				filteredHousesByAddress.push(response.data[i]);
			}
		}
		dispatch({ type: FILTER_HOUSES, payload: filteredHousesByAddress });
	});
};
export const selectHouseById = (id) => (dispatch) => {
	axios.get('/house').then((response) => {
		for (var i = 0; i < response.data.length; i++) {
			if (response.data[i]._id === id) {
				var selectedHouseById = { ...response.data[i] };
			}
		}
		dispatch({ type: SELECT_HOUSE, payload: selectedHouseById });
	});
};
