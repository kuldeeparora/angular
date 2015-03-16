var fs = require('fs');
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var express = require("express");
var app = express();

var users = {
    "1" : {
        "name" : "Kuldeep Arora",
        "twitter" : "tweet2kuldeep"
    },
    "2" : {
        "name" : "Deepti Arora",
        "twitter" : "MongoDB"
    }
};

app.get('/', function(request, response){
    response.send("Hello express1");
});

app.get('/hello/:text', function(request, response){
    response.send(request.params.text);
});

app.get('/user/:id', function(request, response){
    var user = users[request.params.id];
    if(user){
        response.send("<a href='http://twitter.com/" + user.twitter + "'>Follow " + user.name + " on twitter </a>");
    }else {
        response.status(404).send("Sorry we dont what you are talking about :(");
    }
});

app.use(express.static(__dirname + '/sample_files'));

app.listen(port, host);