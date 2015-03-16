var fs = require('fs');

console.log("Starting");

var contents = fs.readFileSync('config.json');
console.log("content in the file " + contents);

var config = JSON.parse(contents);
console.log("content in the file " + config);
console.log("Username " + config.username);

console.log('carry on executing');

