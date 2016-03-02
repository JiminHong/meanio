module.exports = function(app) {

var Post = require('../models/Post.js');

// Finds all Posts
app.get('/api/fetchPosts', function(req, res){

      Post.getPosts(function(doc){
  	    res.json(doc);
      });
});

} //end export
