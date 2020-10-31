const mock_data = require('../MOCK_DATA.json');
const mongoose = require('mongoose');
const db = require('../database/index.js');
const houseSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		imageUrl: { type: String, required: true },
		description: { type: String, required: true },
		address: { type: String, required: true },
		price: { type: Number, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		feedBack: [
			{
				text: {
					type: String,
					required: true,
				},
				created: {
					type: Date,
					default: Date.now(),
				},
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const House = mongoose.model('House', houseSchema);
/* House.remove({}, () => {
	console.log('all elements deleted');
});
House.create(mock_data); */
module.exports = House;
