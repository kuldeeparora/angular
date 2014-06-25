## Namespacing

Naming Conventions
TitleCase, camelCase -
Follow the camel case convention, typing the words in lower-case, only capitalizing the first letter in each word.
Examples
// Good example constructor = TitleCase
var test = new PrototypeApplication();

// Bad example constructor
var test = new PROTOTYPEAPPLICATION();

// Good example functions/methods = camelCase
myFunction();
calculateArea();

// Bad example functions/methods
MyFunction();
CalculateArea();

Variables/Properties -
Variables & Properties should be in lowerCamelCase

Functions/Methods -
Variables & Properties should be in lowerCamelCase
// bad example
function MyFunction() {...}

// good example
function myFunction() {...}

Namespaces/Packages/Classes -
Classes and namespaces should be in UpperCamelCase - Vm.OnNow, Vm.Search

Controllers -
Modules -
Services -
Filters -
Directives -
HTML Identifiers(id's) -
HTML Classes -

Different ways to define a function
myFunction1 = function(arg1, arg2) {};     // NEVER do this!
function myFunction2(arg1, arg2) {};       // This is OK, but...
var myFunction3 = function(arg1, arg2) {}; // This is best!
Assigning the function to a variable via the = operator is called a function expression. This is what happens to myFunction1 and myFunction3. The syntax used with myFunction2 is called function declaration.
Of the three options, the first option is bad because it assigns the function to a variable without the var keyword. This creates a global variable!
The second option is better, and is properly scoped, but it leads to a slightly more complicated syntax once you get into closures. It can also cause your code to behave in ways you may not expect due to JavaScript variable hoisting.
The third option is best, is syntactically consistent with the rest of your variables, and doesn't throw the function into global scope.






