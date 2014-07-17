"use strict";
var Calc = function Calc() {
  console.log('Calc constructor');
};
($traceurRuntime.createClass)(Calc, {add: function(a, b) {
    return a + b;
  }}, {});
var c = new Calc();
console.log(c.add(4, 5));

//# sourceMappingURL=ecma6_new.js.map
