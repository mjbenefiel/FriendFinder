// Pull in required dependencies
let path = require('path');

// Import the list of friend entries
let friends = require('../data/friends.js');

// Export API routes
module.exports = (app) => {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', (req, res) => {
		// Capture the user input object
		let input = req.body;
		// console.log('input = ' + JSON.stringify(input));

		let responses = input.scores;
		// console.log('responses = ' + responses);

		// Compute best friend match
		let matchName = '';
		let matchImage = '';
		let difference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (let i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			let diff = 0;
			for (let j = 0; j < responses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - responses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < difference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				difference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(input);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};