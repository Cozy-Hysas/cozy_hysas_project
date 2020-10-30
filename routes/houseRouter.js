const router = require('express').Router();
let House = require('../models/House');

router.get('/', (req, res) => {
	House.find()
		.then((house) => res.json(house))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/addHouse', (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const imageUrl = req.body.imageUrl;
	const price = req.body.price;
	const address = req.body.address;
	const startDate = req.body.startDate;
	const endDate = req.body.endDate;
	const feedBack = req.body.feedBack;

	const newHouse = new House({
		title,
		description,
		imageUrl,
		price,
		address,
		startDate,
		endDate,
		feedBack,
	});
	newHouse
		.save()
		.then(() => res.json('new House added'))
		.catch((err) => res.status(400).json('Err ' + err));
});

router.delete('/:id', async (req, res) => {
	const house = req.body.house;
	await House.findByIdAndDelete(req.params.id)
		.then(() => res.json('house deleted'))
		.catch(() => res.status(400).json('Error: ' + err));
});

router.put('/:id', async (req, res) => {
	const house2 = req.body.house2;
	await House.findByIdAndUpdate(req.params.id, req.body)
		.then(() => res.json('house updated'))
		.catch(() => res.status(400).json('Error: ' + err));
});

module.exports = router;
