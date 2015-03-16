var fs = require('fs');

console.log("Starting");

//fs.readFile('sample.txt', function (error, data) {
//    console.log("content in the file " + data);
//});

var content = fs.readFileSync('sample.txt');
console.log("content in the file " + content);

console.log('carry on executing');

