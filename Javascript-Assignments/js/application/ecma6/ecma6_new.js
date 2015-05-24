"use strict";
var color = "red";
var speed = 10;
var go = function() {
  console.log("inside function");
};
var car = {
  color: color,
  speed: speed,
  go: go
};
console.log(car.color);
car.go();
var func = (function(x, y) {
  var result = x + y;
  console.log('calculated result as', result);
  return result;
});
func(2, 3);
function sayHello() {
  var $__0 = this;
  this.name = "KD";
  setTimeout((function() {
    console.log(("say hello settimeout is " + $__0.name));
  }), 10);
}
sayHello();
var kd = {
  name: 'KD',
  sayhello: function(names) {
    names.forEach((function(name) {
      console.log(name);
    }));
  }
};
kd.sayhello(['Kuldeep']);
var greetings = ("My fav color is " + car.color);
console.log(greetings);
var name = 'Fido';
var breed = 'schnauzer';
var owners = ['KD', 'Alice'];
console.log((name + " " + breed + ":"));
for (i = 0; i < owners.length; i++) {
  try {
    throw undefined;
  } catch (name) {
    name = owners[$traceurRuntime.toProperty(i)];
    console.log(("owner " + name));
  }
}
console.log(("name is " + name));
var x = 999;
for (var i = 0; i < 10; i++) {
  try {
    throw undefined;
  } catch (x) {
    x = i * 2;
  }
}
console.log(x);
function letUsage() {
  var foo = 5;
  if (true) {
    try {
      throw undefined;
    } catch (foo) {
      foo = 10;
      console.log(("foo1 is " + foo));
    }
  }
  console.log(("foo2 is " + foo));
}
letUsage();
var foot = 'abc';
console.log(foot);

//# sourceMappingURL=ecma6_new.js.map
