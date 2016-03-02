module.exports = function(app){
	var db = require('./config_db.js'),
	mongoose = require('mongoose');

	var userSchema = mongoose.Schema({
            firstName: String,
            lastName: String,
            email: String,
						phone: Number,
            lastName: String,
            email: String
        }),

        _courseModel = mongoose.model('courses', courseSchema),

        // create - inserts a new course
        _save = function(data, success, fail){
	        // Define an object to hold our new course
            var newDocument = new _courseModel({
	            degreeAbbr: data.degreeAbbr,
                abbr: data.abbr,
                title: data.title
            });

			// Insert the new document into the database
            newDocument.save(function(err){
                (err) ? fail(err) : success(newDocument);
            });
        },

        // fetchAll - finds all courses
        _findAll = function(targ, success, fail){
	        // Finds all of the courses specified by the degree
            _courseModel.find(targ, function(err, result){
                (err) ? fail(err) : success(result);
            });
        },

        // fetch - finds only one specified course
        _find = function(targ, success, fail){
	        // Finds just one course specificed by the degree abbreviation and course abbreviation
	        _courseModel.findOne(targ, function(err, result){
		        (err) ? fail(err) : success(result);
	        });
        },

		// fetch - finds only one specified degree
        _remove = function(targ, success, fail){
	        // removes just one course specificed by the Course Abbreviation
	        _courseModel.remove(targ, function(err, result){
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
