

// Constructor Pattern for Creating Objects
var Fruit = function(fruitColor, fruitName, fruitSweetness, fruitPrice, fruitNativeCountry){
    this.fruitColor = fruitColor;
    this.fruitName = fruitName;
    this.fruitSweetness = fruitSweetness;
    this.fruitPrice = fruitPrice;
    this.showName = function(){
        console.log("This is a " + this.fruitName);
    };
    this.nativeTo = function(){
        fruitNativeCountry.forEach(function(eachCountry){
            console.log("Grown in " + eachCountry);
        });
    }
}

var mangoFruit = new Fruit("yellow", "Mango", "Sweat", 10, ["India", "North America", "UAE"]);

console.log(mangoFruit.showName());
console.log(mangoFruit.nativeTo());

// check property existense in object
console.log(mangoFruit.hasOwnProperty ("fruitColor")); //true


//Use of the for/in loop to access the properties in the fruit object
// Prints fruitColor, fruitName, fruitSweetness....
for (var eachItem in mangoFruit) {
    console.log(eachItem);
}

// delete
delete mangoFruit['fruitPrice'];

// Prints this string:
//"{"mike":"Book","jason":"sweater","chels":"iPad"}"
//   

// JSON.parse Examples
// // The following is a JSON string, so we cannot access the properties with dot notation like christmasListStr.mike
var christmasListStr = {
    "mike":"Book",
    "jason":"sweater",
    "chels":"iPad"
};

// Let’s convert it to an object
//var christmasListObj = JSON.parse(christmasListStr);

// Now that it is an object, we use dot notation
console.log(christmasListStr.mike);


