module.exports = function(app) {

var Post = require('../models/Post.js');
var User = require('../models/User.js');

// Inserts a new User
app.post('/api/newPost', function(req, res){
    Post.create(req.body, function(results){
	    res.status(201).send(results);
    });
});

// Finds all Posts related to the user
app.get('/api/fetchPosts', function(req, res){
      Post.fetchAll({},function(doc){
  	    res.json(doc);
      });
});

} //end export
