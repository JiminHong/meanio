module.exports = function(app) {
var User = require('../models/User.js');

// Inserts a new degree
app.post('/api/newUser', function(req, res){
    User.create(req.body, function(results){
	    res.status(201).send(results);
    });
});

// Finds a user
app.get('/api/User', function(req, res){
    User.fetch(function(doc){
	    res.json(doc);
    });
});

} //end export
