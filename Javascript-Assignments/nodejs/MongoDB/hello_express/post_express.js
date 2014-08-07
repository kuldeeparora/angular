// incomplete because bodyparser is deprecated

var express = require('express'),
    app = express(), //Web framework to handle routing requests
    cons = require('consolidate'); // Templating library adapter for Express

//var bodyParser = require('body-parser') //

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
//app.use(express.bodyParser()); // regestring middleware with express - telling express i want to do extra processing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


function errorHandler(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error : err});
}

app.use(errorHandler);

app.get('/', function(req, res, next){
    res.render('fruitPicker', {'fruits': ['apple', 'orange', 'banana', 'grapes', 'peach']});
});

app.post('/favorite_fruit', function(req, res, next){ // : is route says take other part as a variable & save
    var favorite = req.body.fruit;
    if(typeof favorite == 'undefined'){
        next(Error('Please choose a fruit'));
    }
    else {
        res.send('Your Favourite is ' + favorite);
    }
});


app.listen(3000);
console.log("express has started 3000");
