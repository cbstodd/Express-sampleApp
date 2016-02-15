var express = require('express');
var app = express();
var routes = require('./routes');

// JS scripting language.
app.set('view engine', 'ejs');
//Not needed since in views.
app.set('views', __dirname + '/views');

// Pass to all page templates.
app.locals.pagetitle = "Sample App";

// Creates [app.get('/about',] variable used on index & about .js
app.get('/', routes.index);
app.get('/about', routes.about);

// Sets default route error message.
app.get('*', function (request, response) {
    response.send("Bad route");
});


// Creates server
var server = app.listen(3000, function () {
    console.log("<*-= Server is listening on http://localhost:3000 =-*>");
});