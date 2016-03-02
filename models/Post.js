var MongoClient = require('mongodb').MongoClient,
assert = require('assert');
module.exports ={

  getPosts: function(callback) {
    var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/wecare';
    // Use connect method to connect to the DB Server
    MongoClient.connect(mongoUrl, function(err, db) {
      assert.equal(null, err);
      //console.log("Connected correctly to mongodb");
      // Get the documents collection
      var collection = db.collection('posts');
      // Find some documents
      collection.find({}).toArray(function(err, docs) {
        //console.log("logging out all users");
        //console.dir(docs);
        //parsing mongoDoc
        callback(docs);
        //close connection
        db.close();
      });

    });
  }
}//end export
