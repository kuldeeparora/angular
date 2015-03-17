function hello(){
    return "world";
};

function helloWorld(){
    return hello() + " Again"
}

module.exports.helloWorld = helloWorld;