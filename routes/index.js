exports.index =  function (request, response) {
    /* Params passed to default.ejs page. */
    response.render('default', {
        title: 'Home',
        classname: 'home',
        users: ["Colin", "Kevin", "Raney", "Brian"]
    });
};

exports.about = function (request, response) {
    response.render('default', {
        title: 'About us',
        classname: 'about'
    })
};

//// Creates two URL params
//app.get('/who/:name?/:title?', function (request, response) {
//    var name = request.params.name;
//    var title = request.params.title;
//    response.send("<p>Name: " + name + ". Title: " + title + "</p>");
//});