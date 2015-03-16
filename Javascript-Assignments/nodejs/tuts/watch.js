var fs = require('fs');
console.log("Starting");

var config = JSON.parse(fs.readFileSync('config.json'));

console.log("Initial Config", config);

fs.watchFile('config.json', function(current, previous){
    console.log('config changed');
    config = JSON.parse(fs.readFileSync('config.json'));
    console.log("New config", config);
});

console.log('Finished');

