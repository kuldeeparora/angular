/*
class Person {                                          // The 'class' keyword
    constructor(name, age) {                            // Constructors
    this.name = name;
    this.age = age;
}
}

class Developer extends Person {                        // The 'extends' keyword
    constructor(name, age, ...languages) {              // Rest parameters
    super(name, age);                               // Super calls
    this.languages = [...languages];                // The spread operator
}
    printLanguages() {                                  // Short method definitions
    for(let lang of this.languages) {               // The for..of loop
        console.log(lang);
    }
}
}

let me = new Developer("James", 23, "ES5", "ES6");     // Block scoping

    */

// tagtree.io

let color = "red";
let speed = 10;
let go = function(){
    console.log("inside function");
};

let car = {color, speed, go}; // var car = {color: color, speed:speed, go:go} // similar for es5
console.log(car.color);
car.go();


var func = (x ,y) => {
    var result = x + y;
    console.log('calculated result as', result);
    return result;
};
func(2,3);


function sayHello(){
    this.name = "KD";
    setTimeout(() => {
        console.log(`say hello settimeout is ${this.name}`);
    }, 10);
}
sayHello();

var kd = {
    name : 'KD',
    sayhello: function(names){
        names.forEach((name) => {
          console.log(name);
        })
    }
};
kd.sayhello(['Kuldeep']);

var greetings = `My fav color is ${car.color}`;
console.log(greetings);

//Let defined
var name = 'Fido';
var breed = 'schnauzer';
var owners = ['KD', 'Alice']

console.log(`${name} ${breed}:`);

for(i=0; i<owners.length; i++){
    let name = owners[i];
    console.log(`owner ${name}`);
}

console.log(`name is ${name}`);

var x =999;
for (var i=0; i<10; i++){
    let x = i * 2;
}


console.log(x);

function letUsage() {
    let foo = 5;
    if (true){
        let foo = 10;
        console.log(`foo1 is ${foo}`);
    }
    console.log(`foo2 is ${foo}`);
}
letUsage();


// const defined
const foot = 'abc';
// foot = 'def';
console.log(foot);


