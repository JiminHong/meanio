module.exports = function(app){
	var db = require('./config_db.js'),
	mongoose = require('mongoose');

	var postSchema = mongoose.Schema({
            postId: Number,
            message: String,
            timeCreated: Number,
        }),

        _postModel = mongoose.model('users', postSchema),

        // create - inserts a new user
        _save = function(data, success, fail){
	        // Define an object to hold our new course
            var newDocument = new _userModel({
              firstName: data.firstName,
              lastName: data.lastName,
              phone: data.phone,
              email: data.email,
              username: data.username,
              userId: data.userId,
              password:data.password,
              listening: data.listening,
            });

			// Insert the new document into the database
            newDocument.save(function(err){
                (err) ? fail(err) : success(newDocument);
            });
        },

        // fetchAll - finds all users
        _findAll = function(targ, success, fail){
	        // Finds all of the users specified by the degree
            _postModel.find(targ, function(err, result){
                (err) ? fail(err) : success(result);
            });
        },

        // fetch - finds a user
        _find = function(targ, success, fail){
	        // Finds just one user specified by username, userId
	        _postModel.findOne(targ, function(err, result){
		        (err) ? fail(err) : success(result);
	        });
        },

		// remove -
        _remove = function(targ, success, fail){
	        // removes just one course specificed by the Course Abbreviation
	        _postModel.remove(targ, function(err, result){
		        (err) ? fail(err) : success(result);
	        });
        }

    ;return {
		create: _save,
    fetchAll: _findAll,
    fetch: _find,
		destroy: _remove,
    };

}();
