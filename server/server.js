const express = require('express');

var app = express();

app.get('/', (req,res) => {
	res.status(400).send({
		error: 'cannot find page'
	});
})

app.get('/users', (req, res) => {
	res.status(200).send([{
			name: "John Doe",
			age: 25,
			location:"America"
		},{
			name: "Andrew Mead",
			age: 27,
			location:"London"
		}
	])
})

app.listen(3000, () => {
	console.log("connecting to port 3000")
}) 

module.exports.app = app;