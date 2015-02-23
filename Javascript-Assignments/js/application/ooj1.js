
//
/*
var persy = function(firstname, lastname){
    return {
        firstname : firstname,
        lastname : lastname,
        sayHi : function(){
            return "Hi My name is " + this.firstname + " " + this.lastname;
        }
    };
};

var Johny = persy('Jo', 'Honey')
console.log(Johny.sayHi())
*/

//Playing with this keyword
/*
var makeRequest = function (data, callback) {
    var data = 10;
    callback(data);
};

var obj = {
    someValue: 20,
    loadData: function (data) {
        var sum = this.someValue + data;
        console.log(sum);
    },
    prepareRequest: function () {
        var url = "http://google.com";
        makeRequest(url, this.loadData.bind(this));
    }
};
*/

//property descrepers, DATA & Accessor
var createPerson = function(firstName, lastName){
    var person = {};

    Object.defineProperties(person, {
        firstName : {
            value : firstName
//            enumerable : true
//            writable: true
        },
        lastName : {
            value : lastName
        },
        fullName : {
            get : function(){
                return this.firstName + " " + this.lastName;
            }
//            configurable : true // for redifining properties
        }
    });

    return person;
};

var person = createPerson("Data", "Assertion");
console.log(person);

// enumerable options
//1. for in loop
//2. Object.keys(person) - keys are enumerable property

//for (prop in person){
//}


// Closure Example
var aHero = function(){
    return "Hero";
}
var aFoil = function(){
    return "Foil";
}
var aDeed = function(){
    return "eyes";
}
var sagas = [];
var hero = aHero();
var newSaga = function(){
    var foil = aFoil();
    sagas.push(function(){
        var deed = aDeed();
        console.log(hero+deed+foil);
    });
};
newSaga();
sagas[0](); //


// explaining this
var fn = function(one, two){
    console.log(this, one, two);
}

var r = {}, g = 'b', b = 'c', y = 'd';

r.method = fn;

//r.method(g,b); //Object { method: fn() } "b" "c"
//fn(g,b) // output is global, b ,c
//fn.call(r,g,b) // Object { method: fn() } "b" "c"
r.method.call(y,g,b) // String [ "d" ] "b" "c"



// Prototype Chains























