"use strict";
var Person = function Person(name, age) {
  this.name = name;
  this.age = age;
};
($traceurRuntime.createClass)(Person, {}, {});
var Developer = function Developer(name, age) {
  for (var languages = [],
      $__3 = 2; $__3 < arguments.length; $__3++)
    $traceurRuntime.setProperty(languages, $__3 - 2, arguments[$traceurRuntime.toProperty($__3)]);
  $traceurRuntime.superCall(this, $Developer.prototype, "constructor", [name, age]);
  this.languages = $traceurRuntime.spread(languages);
};
var $Developer = Developer;
($traceurRuntime.createClass)(Developer, {printLanguages: function() {
    for (var $__1 = this.languages[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__2; !($__2 = $__1.next()).done; ) {
      try {
        throw undefined;
      } catch (lang) {
        lang = $__2.value;
        {
          console.log(lang);
        }
      }
    }
  }}, {}, Person);
var me = new Developer("James", 23, "ES5", "ES6");

//# sourceMappingURL=ecma6_new.js.map
