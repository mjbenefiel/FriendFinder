// Pull in required dependencies
let path = require('path');

// Export HTML routes
module.exports = (app) => {
	// console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};