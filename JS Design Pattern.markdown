## Notes from Book : Learning Javascript Design Patterns

## Pattern: solution of a common problems

<h3>3 Benefits</h3>
a. Patterns are proven solutions<br>
b. Patterns can be easily reused<br>
c. Patterns can be expressive<br>

<h3>Advantages</h3>
a. Reusing patterns assists in preventing minor issues that can cause major problems in the application development process.<br>
b. Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem<br>
c. Certain patterns can actually decrease the overall file-size footprint of your code by avoiding repetition.<br>
d. Patterns add to a developers vocabulary, which makes communication faster.<br>
e. Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community.

<h3>Good Pattern</h3>
a. Solves a particular problem<br>
b. The solution to this problem cannot be obvious<br>
c. The concept described must have been proven:<br>
d. It must describe a relationship:

<h3>Rule of three:</h3>
a. Fitness of purpose - how is the pattern considered successful<br>
b. Usefulness- why is the pattern considered successful?<br>
c. Applicability - is the design worthy of being a pattern because it has wider applicability? If so, this needs to be explained.When reviewing or defining a pattern, it is important to keep the above in mind.<br>

<h3>Categories(Kind) Of Design Pattern</h3>
Creational Design Patterns :  Creational patterns provide instantiation mechanisms, making it easier to create objects
in a way that suits the situation.<br>
Constructor, Factory, Abstract, Prototype, Singleton and Builder<br>

Structural Design Patterns : Structural patterns generally deal with relationships between entities, making it easier
for these entities to work together. <br>
Decorator, Facade, Flyweight, Adapter and Proxy<br>

Behavioral Design Patterns : Behavioral patterns are used in communications between entities and make it easier and more
flexible for these entities to communicate. <br>
Iterator, Mediator, Observer and Visitor<br>

<h3>Objects</h3>
properties & method : hold complex data structure 

<h2>Types of Design Pattern</h2>
<h3>The Creational Pattern</h3>
In JavaScript, the three common ways to create new objects are as follows:<br>
<pre>
// Each of the following options will create a new empty object:
var newObject = {}; // or 
var newObject = Object.create(null); // or
var newObject = new Object();

<h3>Objects</h3>
properties & method : hold complex data structure 

<h2>Types of Design Pattern</h2>
<h3>1. The Creational Pattern</h3>
In JavaScript, the three common ways to create new objects are as follows:<br>
<pre>
// Each of the following options will create a new empty object:
var newObject = {}; // or 
var newObject = Object.create(null); // or
var newObject = new Object();

Where the 'Object' constructor creates an object wrapper for a specific value, or where
no value is passed, it will create an empty object and return it.
</pre>

There are then four ways in which keys and values can then be assigned to an object:
<pre>
// ECMAScript 3 compatible approaches
// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties
// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// 3. Object.defineProperty 
Object.defineProperty(newObject, "someKey", {
 value: "for more control of the property's behavior",
 writable: true,
 enumerable: true,
 configurable: true
});
// If the above feels a little difficult to read, a short-hand could be written as follows:
var defineProp = function ( obj, key, value ){
 config.value = value;
 Object.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate the object with properties
defineProp( man, 'car', 'Delorean' );
defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );
// 4. Object.defineProperties
Object.defineProperties(newObject, { 
 "someKey": { 
 value: "Hello World", 
 writable: true 
 }, 
 "anotherKey": { 
 value: "Foo bar", 
 writable: false 
 } 
});
As we will see a little later in the book, these methods can even be used for inheritance,
as follows:
var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph
</pre>

<h3>2. The Constructor Pattern</h3>

<h4>Basic Constructor</h4>
<pre>function Car(model, year, miles) {
 this.model = model;
 this.year = year;
 this.miles = miles;
 this.toString = function () {
 return this.model + " has done " + this.miles + " miles";
 };
}
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
</pre>

<h4>Constructors With Prototypes</h4>
<pre>
function Car(model, year, miles) {
 this.model = model;
 this.year = year;
 this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than 
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
 return this.model + " has done " + this.miles + " miles";
};
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());

</pre>

<h3>3. The Singleton Pattern</h3>
In conventional software engineering, the singleton pattern can be implemented by creating a class with a method that
creates a new instance of the class if one doesn't exist. In the event of an instance already existing,
it simply returns a reference to that object.<br>

Exposing only those which you wish to make public is quite straight-forward from that point as demonstrated below:
<pre>
var mySingleton = function () {
// here are our private methods and variables
var privateVariable = 'something private';
function showPrivate() { console.log(privateVariable);
}
// public variables and methods (which can access // private variables and methods )
return {
publicMethod: function () { showPrivate();
},
publicVar: 'the public can see this!'
}; };
var single = mySingleton();
single.publicMethod(); // logs 'something private' console.log(single.publicVar); // logs 'the public can see this!'
</pre>
<pre>
var Singleton = (function () {
 var instantiated;
 function init() {
 // singleton here
 return {
 publicMethod: function () {
 console.log('hello world');
 },
 publicProperty: 'test'
 };
 }
 return {
 getInstance: function () {
 if (!instantiated) {
 instantiated = init();
 }
 return instantiated;
 }
 };
})();
// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();
</pre>


<h3>4. The Module Pattern</h3>
The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in
conventional software engineering. <br>
The Module pattern encapsulates "privacy", state and organization using closures. It provides a way of wrapping a mix of
public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding
with another developer's interface. With this pattern, only a public API is returned, keeping everything else within the
closure private.
<pre>
    var testModule = (function () {

      var counter = 0;

      return {

        incrementCounter: function () {
          return counter++;
        },

        resetCounter: function () {
          console.log( "counter value prior to reset: " + counter );
          counter = 0;
        }
      };

    })();

    // Usage:

    // Increment our counter
    testModule.incrementCounter();

    // Check the counter value and reset
    // Outputs: 1
    testModule.resetCounter();

</pre>
<h3>5. The Revealing Module Pattern</h3>
We would simply define all of our functions and variables in the private scope and return an anonymous object with
pointers to the private functionality we wished to reveal as public.

An example of how to use the Revealing Module pattern can be found below:

<pre>

    var myRevealingModule = (function () {

        var privateVar = "Ben Cherry",
            publicVar  = "Hey there!";

        function privateFunction() {
            console.log( "Name:" + privateVar );
        }

        function publicSetName( strName ) {
            privateVar = strName;
        }

        function publicGetName() {
            privateFunction();
        }


        // Reveal public pointers to
        // private functions and properties

        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };

    })();

    myRevealingModule.setName( "Paul Kinlan" );


The pattern can also be used to reveal private functions and properties with a more specific naming scheme if we would prefer:


    var myRevealingModule = (function () {

        var privateCounter = 0;

        function privateFunction() {
            privateCounter++;
        }

        function publicFunction() {
            publicIncrement();
        }

        function publicIncrement() {
            privateFunction();
        }

        function publicGetCount(){
          return privateCounter;
        }

        // Reveal public pointers to
        // private functions and properties

       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };

    })();

    myRevealingModule.start();
</pre>


Advantages

This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the
module which of our functions and variables may be accessed publicly which eases readability.

Disadvantages

A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be
overridden if a patch is necessary. This is because the private function will continue to refer to the private
implementation and the pattern doesn't apply to public members, only to functions.

Public object members which refer to private variables are also subject to the no-patch rule notes above.

As a result of this, modules created with the Revealing Module pattern may be more fragile than those created with the
original Module pattern, so care should be taken during usage.


<h3>6. The Observer Pattern</h3>
<pre>

</pre>
<h3>7. The Mediator Pattern</h3>
<pre>

</pre>
<h3>8. The Prototype Pattern</h3>
<pre>

</pre>
<h3>9. The Command Pattern</h3>
<pre>

</pre>
<h3>10. The Facade Module Pattern</h3>
<pre>

</pre>
<h3>11. The Mixin Pattern</h3>
<pre>

</pre>
<h3>12. The Decorator Pattern</h3>
<pre>

</pre>
<h3>13. The Flyweight Pattern</h3>
<pre>

</pre>

Where the 'Object' constructor creates an object wrapper for a specific value, or where
no value is passed, it will create an empty object and return it.

There are then four ways in which keys and values can then be assigned to an object:
// ECMAScript 3 compatible approaches
// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties
// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// 3. Object.defineProperty 
Object.defineProperty(newObject, "someKey", {
 value: "for more control of the property's behavior",
 writable: true,
 enumerable: true,
 configurable: true
});
// If the above feels a little difficult to read, a short-hand could be written as follows:
var defineProp = function ( obj, key, value ){
 config.value = value;
 Object.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate the object with properties
defineProp( man, 'car', 'Delorean' );
defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );
// 4. Object.defineProperties
Object.defineProperties(newObject, { 
 "someKey": { 
 value: "Hello World", 
 writable: true 
 }, 
 "anotherKey": { 
 value: "Foo bar", 
 writable: false 
 } 
});
As we will see a little later, these methods can even be used for inheritance, as follows:
var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph
