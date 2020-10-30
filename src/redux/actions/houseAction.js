import { ADD_HOUSE, FILTERED_HOUSES } from './types';
import $ from 'jquery';

let fakeData = [
	{
		_id: 'abcde',
		title: 'This is Some Sample Data',
		imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
		description:
			'Apart from this first post, all of the posts in this set of sample data contain semi-pronouncable random gibberish.',
		price: 214,
	},
	{
		_id: 'abcdf',
		title: 'Use This Data to Help You Build Your Client',
		imageUrl: 'https://source.unsplash.com/1600x900/?mountain,sunset',
		description:
			'Bul gi addez mic abeahiza tilnor reja petiboca gu tetit wavvahigi mipcuf ben gizen vozin avojagu.',
		price: 501,
	},
	{
		_id: 'abcdg',
		title: 'Then Replace It With Data Obtained from your Server and Database',
		imageUrl: 'https://source.unsplash.com/1600x900/?airplane',
		description: `Ebihalar ejo wemes tentewih awziv ocanerir sitbi bod jahfu dumtivub sucov om rapic hasgusbep hogtolfa beccuro usiro nepguup.`,
		price: 318,
	},
	{
		_id: 'abcdh',
		title: "You Won't BELIEVE What Happens Next",
		imageUrl: 'https://source.unsplash.com/1600x900/?guitar',
		description: `Wiebsa we ad jenubsu hamjes pulwa feh zeutgo vumpubsef sos is use fimeh as onbo.`,
		price: 479,
	},
];

export const addHouse = (newHouse) => (dispatch) => {
	console.log('it comes to the addhouse action');
	$.post('/House/addHouse', newHouse).then((res) => {
		console.log('it made the server call of the add house action');
		dispatch({ type: ADD_HOUSE, payload: newHouse });
	});
};
export const fetchHouses = () => (dispatch) => {
	dispatch({ type: FILTERED_HOUSES, payload: fakeData });
	/* $.get('/House').then((listOfFilteredHousesFromDB) => {
		console.log('it made the server call of the fetch list of houses action');
		dispatch({ type: FILTERED_HOUSES, payload: listOfFilteredHousesFromDB });
	}); */
};
