module.exports = function(app) {

var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

};
