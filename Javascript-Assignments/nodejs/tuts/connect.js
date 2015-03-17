var mongo = require("mongodb");

var host = "127.0.0.1";
var port = "mongo.Connection>DEFAULT_PORT";
var db = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));

db.open(function(error){
    console.log("We are connected" + host + ":" +port);

    db.collection("user", function(error, collection){
        console.log("we have the collection");
        collection.insert({
            id: "1",
            name: "Kuldeep",
            twitter: "kuldeeparora",
            email: "kuldeep.arora@gmail.com"
        }, function () {
            console.log("Success KD");
        });

        collection.insert({
            id: "2",
            name: "Joe",
            twitter: "joeblogs",
            email: "kuldeep.arora@gmail.com"
        }, function () {
            console.log("Success Joe");
        });
    });
});