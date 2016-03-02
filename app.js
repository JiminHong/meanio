"use strict";
// Modules
const express = require('express'),
			app = express();
// View engine
app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});


// Config vars
var port = process.env.PORT || 8080;

// =-=-=-=-=-=-=-=-=-=-=- Routes -=-=-=-=-=-=-=-=-=-=-=-=-=
require('./routes/routes')(app);

var server = app.listen(port, function(){
  if(process.env.DEBUG) console.log('Server Active On', port);
});
module.exports = server;
