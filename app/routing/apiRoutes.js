let path = require('path');

let friends = require('../data/friends.js');

// Export API routes
module.exports = (app) => {
	
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', (req, res) => {
		let input = req.body;
	
		let responses = input.scores;
	
		// Compute bff match
		let matchName = '';
		let matchImage = '';
		let difference = 10000; // Make the initial value large for comparison

		for (var i in friends) {
	
			let diff = 0;
			for (var j in responses) {
				diff += Math.abs(friends[i].scores[j] - responses[j]);
			}
					// If lowest difference, record friend match
			if (diff < difference) {
		
				difference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		friends.push(input);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};