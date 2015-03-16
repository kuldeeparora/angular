var http = require('http'); //how we require modules
//var EventEmitter = require("events").EventEmitter;
var fs = require('fs');

var file = fs.createReadStream("MangoDB.md");
var newfile = fs.createWriteStream("MangoDB_test.md");
file.pipe(newfile);


var server = http.createServer(function(request, response){
    response.writeHead(200); //Status code in header
    response.write("Dog is running "); // Response Body
    setTimeout(function(){
        response.write('Dog is done');
        response.end(); //close connection
    }, 500);
});

//var logger = new EventEmitter(); //Events(error, warn & info)

//logger.on('error', function(message){
//    console.log('ERR: ' + message);
//});

server.listen(8000); // Listen for connection on this port

console.log("server running");
//console.log(server.response);
