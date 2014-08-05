var express = require('express'),
    app = express(), //Web framework to handle routing requests
    cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//app.use(app.router);

function errorHandler(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error : err});
}

app.use(errorHandler);

app.get('/:name', function(req, res, next){ // : is route says take other part as a variable & save
        var name = req.params.name;
        var getvar1 = req.params.getvar1;
        var getvar2 = req.params.getvar2;
        res.render('hello', {name: name, getvar1: getvar1, getvar2:getvar2});
});

app.listen(3000);
console.log("express has started 3000");


