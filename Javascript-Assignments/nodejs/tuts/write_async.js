var fs = require('fs');
console.log("Starting");

//fs.readFile('sample.txt', function (error, data) {
//    console.log("content in the file " + data);
//});

fs.writeFile('write_sync.txt', "Hello world! Synchronous", function(error){
    console.log("Written File");
});

console.log('Finished');

