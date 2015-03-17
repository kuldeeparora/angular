var myModule = require("./mymodule.js");
var github = require("./github.js");

console.log("Hello " + myModule.helloWorld());

github.getRepos("kuldeeparora", function (repos) {
    console.log("kuldeep repos " , repos);
});
