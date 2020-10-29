import { ADD_HOUSE } from './types';
import $ from 'jquery';

export const addHouse = (newHouse) => (dispatch) => {
	console.log('it comes to the addhouse action');
	$.post('/House/addHouse', newHouse).then((res) => {
		console.log('it made the server call of the add house action');
		dispatch({ type: ADD_HOUSE, payload: newHouse });
	});
};
