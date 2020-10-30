const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const houseRouter = require('./routes/houseRouter');
const users = require('./routes/user');
const tenants = require('./routes/tenant');

app.use(express.static('build'));
app.use('/House', houseRouter);
app.use('/users', users);
app.use('tenants', tenants);

const port = 3000;

app.listen(port, () => {
	console.log(`server listening on port http://localhost:${port}`);
});
