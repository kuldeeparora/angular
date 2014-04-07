
<dl>

<dt>JavaScript</dt>

<dd><strong>Object Oriented Programming</strong></dd>
<dd>
<strong>Ans</strong>
OOP is a pattern of writing program using Objects, Objects that encapsulate property & behaviour into one entity<br>
e.g. car as an object, model, seats, tyre are properties & driving left, moving back & fwd are behaviours.
</dd>

<dd>What is JSON Object ?</dd>
<dd>
<strong>Ans</strong>
Object is the main data type in JavaScript. "Everything" in JavaScript is an Object.<br>
A JavaScript object is a complex variable, with properties and methods.<br>
</dd>

<dd>How to create objects ?</dd>
<dd>
<strong>Ans</strong>
<pre>
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
</pre>

Create a object: <br>
<pre>
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
</pre>
</dd>

<dd>What is prototype ?</dd>
<dd>
<strong>Ans</strong>
prototype is a default property of any object in javascript which holds references to functions of that object. <br>
Using prototype property we can extending or adding more functions to any object class
</dd>

<dd>What is namespace ?</dd>
<dd>
<strong>Ans</strong>
In JS all global functions and variables shared same namespace because of that face name-conflicts.
With the help of namespace we can define the scope of functions & variables.
<dd>


<dt>JavaScript basics</dt>
<dd>About operators and functions ?</dd>
<dd>
<strong>Ans</strong>

<pre>
    Math Operators
        +, - , * , ++, --, /, %

    Conditional Operators:
         > , < , '< =', '> =', '==' , '===', '!=',

    Logical Operators:
        !, && , ||

    Ternary Operators:
        ?:
        condition ? true statement: false statement

    Type Operators:
        typeof , instanceof
        typeof check the type of variable & instance of check the type of object

        typeof variable - number, string, object, boolean

    Type of Object -
        if(x instanceof Array){
            console.log(x.length);
        }

        if(x instanceof Person){
         }

            ex. -
            var x="string";
            if(typeof x=="string") {
                console.log("value is a string");
            }

</pre>

</dd>

<dd>What is global variable ?</dd>
<dd>
<strong>Ans</strong>
A variable which is defined outside of the function scope is called global variable.
</dd>


<dd>What is function closure ?</dd>
<dd>
<strong>Ans</strong>
Scoping references & variables of any function to avoid conflicts from global namespace
</dd>


<dd>What is Regular Expression and how to use in JS ?</dd>
<dd>
<strong>Ans</strong>
RegEx is a sequence of characters that form a search pattern, mainly for use in pattern matching with strings, or string matching.

 var regexp=new RegExp(/hello/);
        regexp.test("hello m1 ");
<dd>

<dd>What is DOM ?</dd>
<dd>
<strong>Ans</strong>
Document Object Model
DOM is object based representation of web documents,
it represents whole document in Object hierarchy to interact with individual elements of document.
It creates properties, events & methods for elements.
</dd>

<dd>Event binding in JS ?</dd>
<dd>
<strong>Ans</strong>
HTML elements includes different events listeners like mouseover, click etc...
and these event listeners can be associated with JS functions to perform some action
</dd>

<dd>What is AJAX ?</dd>
<dd>
<strong>Ans</strong>
With Ajax, Web applications can send data to, and retrieve data from,
a server asynchronously (in the background) without interfering with the display and behavior of the existing page.
Data can be retrieved using the XMLHttpRequest object.
Despite the name, the use of XML is not required; JSON is often used instead, and the requests do not need to be asynchronous.
</dd>

<dd>Design Patterns</dd>
<dd>What is design pattern ?</dd>
<dd>
<strong>Ans</strong>
Design Pattern is a solution of a common problems
</dd>

<dd>About common design patterns - Singleton, Module, Factory etc</dd>


<dd>HTML5 APIs and Canvas</dd>
<dd>What are the new features and APIs in HTML5 ?</dd>
<dd>
<strong>Ans</strong>
API - Application programming interface
New Features
1. Canvas
2. File APIs(to access file)
3. Local storage
4. Web Socket
5. Web Workers
6. New HTML Controls(Date Picker, Calender, color picker)

APIs
1. Media APIs - There are a number of methods including play() and pause() as well as load() and canPlayType().
2. Text Track API - The text track API leads on nicely from the media API. It is designed to allow us to interact
with text tracks (subtitles or captions for example) for the audio and video elements.
3. Drag and Drop - By adding a draggable attribute set to true, the user has the ability to move any element.
You then add some event handlers on a target drop zone to tell the browser where the element can be dropped.
4. Offline Web Applications/Application Cache - Application caching is carried out by creating a simple manifest file
which lists the files that are required for the application to work offline.
5. History APIs - The pre-HTML5 History API allowed us to send users forward or back, and check the length of the history.
What HTML5 brings to the party are ways to add and remove entries in the user's history, hold data to restore a page state
and update the URL without refreshing the page. The scripting is fairly straightforward and will help us build complex
applications that don't refresh the page from which we can continue to share URLs as we've always done.
6. Canvas 2D Context - allows us draw natively in the browser. Using canvas without the 2D Context API
we wouldn't be able to draw. It's our brushes, palette and paint all rolled into one.
7. Cross document and channel messaging — cross document messaging defines a way for documents to communicate with
one-another regardless of their source domain without enabling cross-site attacks.
8. Microdata — adds an additional layer of semantics to your documents from which search engines,
browsers and more can use to extract information and provide an enhanced browsing experience.
9. Web Workers — an API for running JavaScript in the background independent of any user scripts. Allows for long
running tasks to be completed without preventing the page from becoming unresponsive
10. Web Storage — a spec for storing client side data (key value pairs) similar to cookies
11. Web Sockets — allows pages to use the WebSocket protocol to send two way messages between a browser and server.
12. Server sent events — allows for push notifications to be sent from a server to a browser in the form of DOM events.

</dd>

<dd>Canvas vs SVG ?</dd>
<dd>
<strong>Ans</strong>
Canvas is javascript api base & SVG is xml base
Canvas performance is good as compare to SVG
Canvas easily customizable & graphics optimize run time
</dd>


<dt>CSS</dt>

About CSS properties like - display, visibility, float, block vs inline-block

CSS Hacks ?

CSS pseudo classes ?


<dd>What is Box Model ?</dd>
<dd>
<strong>Ans</strong>
describes the rectangular boxes that are generated for elements laid out in the page. Essentially, everything is a rectangle.
content - padding - border - margin
Some interesting facts:
1. border-radius rounds out the corners of this box
2. box-shadow adds a shadow to this box
3. outline and box-shadow aren't part of the box, and therefore have no effect on the layout

Box-sizing - The box-sizing property gives you a little control around how boxes are sized within this model.
The two possible values for box-sizing are content-box and border-box.


</dd>


CSS3/HTML5

New features in HTML5/CSS3 ?
What is media query ?

How to create animation using CSS3 properties ?


HTML5 controls and new tags ?
Usage of modenizer to detect HTML5 features ?


Responsive Web Design (RWD)

What is responsive design ?
About media query for iPad, iPhone, Desktop browsers ?
What is bootstrap ?


Frameworks -  jQuery/AngularJS/Backbone/RequireJS/ExtJS

Framework specific questions ?
How to make ajax calls using frameworks like jQuery/AngularJS/ExtJS ?
What is MVC framework/pattern in UI development ?
Comparison of frameworks and criteria for selection ?


Debugging/Troubleshooting Web Applications

How to debug web application ?
How to optimize performance ?
Cross browser compatibility issues and fixes ?

</dl>











<dd>
Pattern: solution of a common problems

3 Benefits
a. Patterns are proven solutions
b. Patterns can be easily reused
c. Patterns can be expressive

Advantages
a. Reusing patterns assists in preventing minor issues that can cause major problems in the application development process.
b. Reusing patterns assists in preventing minor issues that can cause major problems in the application development process.
c. Certain patterns can actually decrease the overall file-size footprint of your code by avoiding repetition.
d. Patterns add to a developers vocabulary, which makes communication faster.
e. Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community.

Good Pattern
a. Solves a particular problem
b. The solution to this problem cannot be obvious
c. The concept described must have been proven:
d. It must describe a relationship:

Rule of three:
a. Fitness of purpose - how is the pattern considered successful
b. Usefulness- why is the pattern considered successful?
c. Applicability - is the design worthy of being a pattern because it has wider applicability? If so, this needs to be explained.When reviewing or defining a pattern, it is important to keep the above in mind.


Categories Of Design Pattern
Creational Design Patterns :  Constructor, Factory, Abstract, Prototype, Singleton and Builder
Structural Design Patterns : Decorator, Facade, Flyweight, Adapter and Proxy
Behavioral Design Patterns : Iterator, Mediator, Observer and Visitor


Objects : properties & method : hold complex data structure
Object can hold the instance of classes
JSON Object : {} : we can directly object create object with properties and functions using {}. we cannot create new instance of JSON Object.

Class(function) : is generic(includes property & method) definition of object.
prototype is default property of class to add more methods(functions).

prototype: extending or adding more functions to any object class







</dd>
