OOJ

Primitive - String, Number, Boolean, Undefined, Null  - These are not Objects & these are values.
Values has no properties & methods

Reference Types - Object, Array, Function, Date, RegExp - These are Objects
DOM API are Objects


"hello".length; -> 5
new String("hello".length); -> 5
statement executes & collected by garbage collector

Create a object from a primitive value, use a constructor of particular data type
Only way to use a object of a string is calling a constructor & using a new operator
var obj = new String("hello".length); - >undefined

Example 1
typeof obj -> "object"
typeof "obj" -> "string"
typeof String("Hello"); -> "string"
typeof obj.valueOf() -> "string"

Example 2
var num = new Number(10) - undefined
typeof num - "object"
typeof 10 - "number"
typeof Number(10) - "number"
var sum = num + 10 - undefined
typeof sum - "number"
typeof num - "object"

Example 3
var num = 10 -> undefined
num.property = "hello"
num.property -> undefined
var num = new Number(10) -> undefined
num.property = "hello" -> "hello"
num.property  -> "hello"


var person = new Object();
person.firstName = "John"
person.lastName = "Doe"



