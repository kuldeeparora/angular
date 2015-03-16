var fs = require('fs');
console.log("Starting");

//fs.readFile('sample.txt', function (error, data) {
//    console.log("content in the file " + data);
//});

fs.writeFileSync('write_sync.txt', "Hello world Synchronous");

console.log('Finished');

