
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

