
<dl>

<dt>JavaScript</dt>

<dd><strong>Object Oriented Programming</strong></dd>
<dd>
<strong>Ans</strong>
OOP is a pattern of writing program using Objects, Objects that encapsulate property & behaviour into one entity<br>
e.g. car as an object, model, seats, tyre are properties & driving left, moving back & fwd are behaviours.
</dd>

<dd>What is Object ?</dd>
<dd>
<strong>Ans</strong>
Object is the main data type in JavaScript. "Everything" in JavaScript is an Object.<br>
A JavaScript object is a complex variable, with properties and methods.<br>
</dd>

<dd>What is JSON Object</dd>
<dd>
<strong>Ans</strong>
JSON stands for Javascript Object Notation. Its a simple for of object in Javascript which includes properties and methods.
It can be defined by open & close curly braces - {}
var obj = {
    data : "hi",
    fn : function (){
        alert("Hello");
    }
};

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
Using prototype property we can extend or add more functions to any object class
</dd>

<dd>What is namespace ?</dd>
<dd>
<strong>Ans</strong>
In JS all global functions and variables shared same namespace because of that we may face name-conflicts.
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

    Instance - check type of Object -
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
<dd>
<strong>Ans</strong>
Singleton : In this pattern we restrict creation of multiple instances of an object. This pattern provides a solution to use a single instance of an object within a application.
Module: In this pattern we enclose module functions & variables into a namespace to provide module specific functionalities without conflicting with other modules.
Factory: In this pattern we implement a common solution to create different type of objects depending on data & configuration.

</dd>

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
Canvas easily customizable & graphics optimize run time.

You should use Canvas for:
Interactive image editing: cropping, resizing, filters (think red eye removal, sepia, colorize, etc.)
Generating raster graphics: data visualizations, data plots, rendering fractals, function plots.
Image analysis: read pixels to gather data for histograms, color usage, and anything else you can imagine.
Rendering game graphics, such as sprites and backgrounds.

You should use SVG for:
Resolution-independent Web application user interfaces.
Highly interactive animated user interfaces.
Data charts and plots.
Vector image editing.

paperjs, processingjs & raphaeljs supports canvas & svg

for 3D - threejs

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


<dd>Why SASS</dd>
<dd>
<strong>Ans</strong>
SASS is CSS preprocessors. It is an abstraction layer on top of CSS. It is a special syntax/language that compile down into CSS.
SASS make managing CSS easier, with things like variables and mixins to handle vendor prefixes (among other things).
SASS make doing best practices easier, like concatenating and compressing CSS.
</dd>


<dd>What is normalise css</dd>
<dd>
<strong>Ans</strong>
Normalize you might call a CSS reset alternative. Instead of wiping out all styles, it delivers a set of reasonable defaults.
It doesn't unset things that are already consistent across browsers and reasonable (e.g. bold headers). In that way it does
some less than a reset. It also does some more than a reset in that it handles quirks you may never consider, like HTML5
audio element inconsistencies or line-height inconsistencies when you use sub and sup elements.
</dd>


<dd>What are the various techniques for clearing floats?</dd>
<dd>
<strong>Ans</strong>
1. Use a clearfix (bonus points for micro clearfix).
2. Float the parent as well.
3. Use an overflow property other than "visible" on the parent (bonus points for listing downsides like cutting off shadows).
</dd>


<dd>compare using inline-block and floats for building a grid.</dd>
<dd>
<strong>Ans</strong>
With inline block you need to deal with the whitespace issue. With floats you need to deal with clearing.
</dd>


<dd>What are sprites and why would use them? </dd>
<dd>
<strong>Ans</strong>
Sprites are essentially multiple images combined into one. Performance is the reason that they are used.
Generally speaking, the slowest thing a website can do is request a resource. The fewer requests a site needs to make,
the faster it is. Fast = good. Combining what would be many requests into one = good.
</dd>


<dd>What is the difference between inline, inline-block, and block?</dd>
<dd>
<strong>Ans</strong>
the fact that you can't transform inline elements.
</dd>

<dd>What tools do you use for cross-browser testing?</dd>
<dd>
<strong>Ans</strong>
They should have some kind of strategy. Perhaps a web based tool like BrowserStack.
Perhaps a VM based tool like Virtual Box. Perhaps different actual computers.
</dd>

<dd>Backface - visibility</dd>
<dd>
<strong>Ans</strong>
The backface-visibility property relates to 3D transforms. With 3D transforms, you can manage to rotate an element so
what we think of as the "front" of an element no longer faces the screen. For instance, this would flip an element away from the screen:
the default for backface-visibility is visible. Instead of it being visible, you could hide it.
</dd>

<dd></dd>
<dd>
<strong>Ans</strong>
</dd>


<dd>KeyFrame Animatiom</dd>
<dd>
<strong>Ans</strong>
It is a frame based animation. The animation gradually change from current style to the new style.
</dd>



CSS3/HTML5

New features in HTML5/CSS3 ?




<dd>What is media query ?</dd>
<dd>
<strong>Ans</strong>
Media queries are an excellent way to deliver different styles to different devices, providing the best experience for
each type of user. A part of the CSS3 specification, media queries expand the role of the media attribute that controls
how your styles are applied. For example, it's been common practice for years to use a separate style sheet for printing
web pages by specifying media="print" . Media queries take this idea to the next level by allowing designers to target
styles based on a number of device properties, such as screen width, orientation, and so on. Figures 1–3 demonstrate media
queries in action. They all show the same web page as viewed in a desktop browser, on a tablet, and on an iPod touch.

Media queries are supported in Internet Explorer (IE) 9+, Firefox 3.5+, Safari 3+, Opera 7+, as well as on most modern
smartphones and other screen-based devices. Although older versions of IE don't support media queries,
you can—and should—start using them now.

You can compose complex media queries using logical operators, including not, and, and only.

Media features - Most media features can be prefixed with "min-" or "max-" to express "greater or equal to" or "less
than or equal to" constraints.  This avoids using the "<" and ">" symbols, which would conflict with HTML and XML.

Media features for setting conditions in media queries
Feature	                Value	                    Min/Max	        Description
width                   Length	                    Yes	            Width of display area
height                  Length	                    Yes	            Height of display area
device-width            Length	                    Yes	            Width of device
device-height           Length	                    Yes	            Height of device
orientation             portrait or landscape	    No	            Orientation of device
aspect-ratio            Ratio (w/h)	                Yes	            Ratio of width to height, expressed as two integers
                                                                    separated by a slash (e.g., 16/9)
device-aspect-ratio     Ratio (w/h)	                Yes	            Ratio of device-width to device-height
color                   Integer	                    Yes	            Number of bits per color component (if not color,
                                                                    the value is 0)
color-index             Integer	                    Yes	            Number of entries in the output device's color
                                                                    lookup table
monochrome              Integer	                    Yes	            Number of bits per pixel in the monochrome frame
                                                                    buffer (if not monochrome, the value is 0)
resolution              Resolution	                Yes	            Density of pixels of output device, express as
                                                                    integer followed by dpi(dots/ per inch) or dpcm(dots per centimeter)
scan                    progressive or interlace	No	            Scanning process used by TV devices
grid                    0 or 1	                    No	            If set to 1, the device is grid-based, such as a
                                                                    teletype terminal or phone display with only one
                                                                    fixed font (all other devices are 0)

http://www.adobe.com/devnet/dreamweaver/articles/introducing-media-queries.html

</dd>

<dd>About media query for iPad, iPhone, Desktop browsers ?</dd>




<dd>How to create animation using CSS3 properties ?
Very Important - how to use it</dd>
<dd>
<strong>Ans</strong>
Add more css3 interview questions

</dd>


HTML5 controls and new tags ?
<dd>
<strong>Ans</strong>
</dd>



<dd>Usage of modenizer to detect HTML5 features ?</dd>
Modernizer - It is a library which can detects HTML5 & CSS3 features in user browser. It helps in implementing workarounds of html5 features on non-supporting browsers.


<dt>Responsive Web Design (RWD)</dt>
<dd>What is responsive design ? Difference between Adaptive & Responsive</dd>
<dd>
<strong>Ans</strong>
It's about making websites work wherever the web is. Different devices with different sizes and different capabilities.
Responsive design is about taking one code base and making it work for all of them. Part of that is media queries and
different visuals. Part of that is different resources (e.g. different JavaScript to handle touch vs click or different
images to accommodate the screen).

Responsive Design : True responsive design is fluid, using CSS3 media queries to respond to any screen sizes.
With the use of this CSS3 module, you can create a flexible grid where text can wrap and images can shrink to adjust
along with your browser. With responsive design, the use of media queries also opens up a range of options that allow
for layouts

Adaptive design : uses a series of static layouts based on breakpoints. For example, you may design a webpage at
three different sizes: 320 for mobile phones, 760 pixels for tablets, and 960 for desktop browsers.
Unlike responsive (where the design responds while you adjust a browser window), adaptive files don’t respond once
they are loaded. It detects the device and calls up the properly sized layout to view.


Conclusion: Responsive fluid design may give your user an optimal experience no matter what device they view the design in.
It also allows for one HTML file to optimize for more than one environment. You may, however, have less control over
how everything looks if you’re taking a fluid approach by using percentage based scaling.

Tips
- When designing adaptive, design for these six common screen widths: 320, 480, 760, 960, 1200 and 1600.
- Media queries do not work in Internet Explorer 8 and below. Use a Javascript polyfill like CSS3-MediaQueries.js
to support media queries in old legacy browsers. Consider though that polyfills can add to the file size and that
Javascript can be turned off by users.
- For flexible grid layouts in Responsive design use ems or percentages.  Avoid fixed widths.
- In responsive design, use max-width:100% to make images, videos and HTML5 canvas scalable. As the viewports get
smaller any media will scale down according to its container width. However, max-width does not work with embedded media.

Responsive Design - https://www.responsys.com/blogs/nsm/cross-channel-marketing/difference-responsive-adaptive-web-design/
For Video responsive - http://alistapart.com/article/creating-intrinsic-ratios-for-video
</dd>

<dd>What is Javascript Polyfills</dd>
<dd>
<strong>Ans</strong>
If browser doesn't have any feature than polyfill provide alternative plugin to work.
</dd>


<dd>Why Mobile first for responsive design</dd>
<dd>
<strong>Ans</strong>

Mobile first, from a coding perspective, means that your base style is typically a single-column, fully-fluid layout.
You use @media (min-width: whatever) to add a grid-based layout on top of that.

The alternative – desktop first – involves starting with a wide, grid-based layout, and using @media (max-width: whatever)
to scale down to a single-column layout.

Why - Mobile first web design extends progressive enhancement to site layout, allowing you to serve simple,
readable content to all devices, and layer on structure and presentation for more capable devices.

Progressive enhancement essentially means adding more cool stuff (CSS & JavaScript, usually) as our device can handle it.
It’s sort of the inverse to the concept of “graceful degradation,” which means that we start with all of our great
functionality and design components, and remove them as needed for devices/browsers that can’t handle them.
In terms of taking an approach to mobile first CSS, we can often achieve better performance on average by implementing
a mobile first approach. Again, remember that we want to switch as much of the work as possible away from mobile devices
and onto their (typically) more performant non-mobile counterparts.

Respond.js - to support responsive layout for non-supportive browser - specially IE

Nutshell - Mobile screens are small & easy to start work. Its easier as a developer to add more content after creating mobile design.
</dd>





<dd>What is bootstrap ?</dd>
<dd>
<strong>Ans</strong>
It is a commonly used library to create a responsive application.
</dd>



Frameworks -  jQuery/AngularJS/Backbone/RequireJS/ExtJS


Framework specific questions ?
How to make ajax calls using frameworks like jQuery/AngularJS/ExtJS ?

<dd>What is MVC framework/pattern in UI development ?</dd>
<dd>
<strong>Ans</strong>
Purpose of MVC - Sepration of code based on functionalities like Models(Data Binding - Ajax Request), View (UI Component), Controller(Event Binding & Logic)
</dd>


<dd>Comparison of frameworks and criteria for selection ?</dd>
<dd>
<strong>Ans</strong>

</dd>


<dt>Debugging/Troubleshooting Web Applications</dt>


<dd>How to debug web application ?</dd>
<dd>
<strong>Ans</strong>
1. Use of Firebug - Inspect Element
2. Use of Breakpoint
3. Developer Tools for IE
</dd>

<dd>How to optimize performance ?</dd>
<dd>
<strong>Ans</strong>
1. Avoid use Global Variables
2. caching of array length before looping
    a. Fix the Spacing - for (i = 0; i < anchors.length; i++) {  }
    b. Localize Your Variable - for (var i = 0; i < anchors.length; i++) { }
    c. Don’t Use the Increment Operator - for (var i = 0; i < anchors.length; i += 1) { }
    d. Don’t Calculate the Length on Each Iteration - for (var i = 0, j = anchors.length; i < j; i += 1) {  }

3.


</dd>

<dd>Difference between call & apply</dd>
<dd>
<strong>Ans</strong>
The apply() method is identical to call(), except apply() requires an array as the second parameter. The array represents the arguments for the target method."
function f(message) { ... }
f.call(receiver, "test");
f.apply(receiver, ["test"]);

</dd>


<dd>Cross browser compatibility issues and fixes ?</dd>
<dd>
<strong>Ans</strong>

</dd>

<dt>Testing</dt>



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


<dd> use of grunt, css3 animation, require js, </dd>