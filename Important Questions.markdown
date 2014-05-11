<dl>
<dt>JavaScript</dt>
<dd><strong>Object Oriented Programming</strong></dd>
<dd><strong>Ans</strong>OOP is a pattern of writing program using Objects, Objects that encapsulate property & behaviour into one entity<br>
e.g. car as an object, model, seats, tyre are properties & driving left, moving back & fwd are behaviours.</dd>

<dd>What is Object ?</dd>
<dd><strong>Ans</strong>Object is the main data type in JavaScript. "Everything" in JavaScript is an Object.<br>
A JavaScript object is a complex variable, with properties and methods.</dd>

<dd>What is JSON Object</dd>
<dd><strong>Ans</strong>JSON stands for Javascript Object Notation. Its a simple for of object in Javascript which includes properties and methods.
It can be defined by open & close curly braces - {}
<pre>
var obj = {
    data : "hi",
    fn : function (){
        alert("Hello");
    }
};
</pre></dd>

<dd>How to create objects ?</dd>
<dd><strong>Ans</strong>
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
<dd><strong>Ans</strong>
prototype is a default property of any object in javascript which holds references to functions of that object. <br>
Using prototype property we can extend or add more functions to any object class
</dd>

<dd>What is namespace ?</dd>
<dd><strong>Ans</strong>
In JS all global functions and variables shared same namespace because of that we may face name-conflicts.
With the help of namespace we can define the scope of functions & variables.
<dd>


<dt>JavaScript basics</dt>
<dd>About operators and functions ?</dd>
<dd><strong>Ans</strong>
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

</pre></dd>

<dd>What is global variable ?</dd>
<dd><strong>Ans</strong>
A variable which is defined outside of the function scope is called global variable.
</dd>

<dd>How to find global variable in page</dd>
<dd>
Type : Object.keys(window); in console to find global variable in page.
</dd>

<dd>What is function closure ?</dd>
<dd><strong>Ans</strong>
Scoping references & variables of any function to avoid conflicts from global namespace
</dd>

<dd>What is Regular Expression and how to use in JS ?</dd>
<dd>
<strong>Ans</strong>
RegEx is a sequence of characters that form a search pattern, mainly for use in pattern matching with strings, or string matching.
<pre>
 var regexp=new RegExp(/hello/);
        regexp.test("hello m1 ");
</pre><dd>

<dd>What is DOM ?</dd>
<dd><strong>Ans</strong>
Document Object Model
DOM is object based representation of web documents,
it represents whole document in Object hierarchy to interact with individual elements of document.
It creates properties, events & methods for elements.</dd>

<dd>Event binding in JS ?</dd>
<dd><strong>Ans</strong>
HTML elements includes different events listeners like mouseover, click etc...
and these event listeners can be associated with JS functions to perform some action
</dd>

<dd>What is AJAX ?</dd>
<dd><strong>Ans</strong>
With Ajax, Web applications can send data to, and retrieve data from,
a server asynchronously (in the background) without interfering with the display and behavior of the existing page.
Data can be retrieved using the XMLHttpRequest object.
Despite the name, the use of XML is not required; JSON is often used instead, and the requests do not need to be asynchronous.
</dd>



<dd>Why should you avoid using globals in JavaScript?</dd>
<dd>
<strong>Ans</strong>
Every JavaScript file included in the page runs in the same scope. If you have global variables or global functions in
your code, scripts included later could overwrite these.
</dd>

What is meant by hoisting in JavaScript?
Within its current scope, regardless of where a variable is declared, it will be, behind the
scenes, hoisted to the top. However, only the declaration will be hoisted. If the variable is
also initialized, the current value, at the top of the scope, will initially be set to undefined


What method would you use to remove an element from an array in
1. splice(index, elements_to_remove)
2. delete array[index]


How many & what are the types are there in JavaScript
6

Null
String
Number
Object
Boolean
Undefined


What is the difference between “==” (double equals) and “===” (triple
equals)?
“==” checks equality only,
“===” checks for equality as well as the type.


Name a JavaScript function which can be used to convert a non numeric value into a number?
Number()
parseInt()
parseFloat()


Why might you need to use Array.prototype.slice.call in JavaScript?
To convert array like objects or collections to a new Array.


<dd>Difference between call & apply</dd>
<dd>
<strong>Ans</strong>
The apply() method is identical to call(), except apply() requires an array as the second parameter. The array represents
the arguments for the target method."

1. Both accept the context / scope / scope or context of this as the first argument
2. call() is then followed by a list of arguments, apply() is followed by an array of arguments

function f(message) { ... }
f.call(receiver, "test");
f.apply(receiver, ["test"]);

</dd>









<dt>CSS</dt>
About CSS properties like - display, visibility, float, block vs inline-block


<dd>Efficiently Rendering CSS</dd>
<dd><pre>
#main-navigation {   }      /* ID (Fastest) */
body.home #page-wrap {   }  /* ID */
.main-navigation {   }      /* Class */
ul li a.current {   }       /* Class *
ul {   }                    /* Tag */
ul li a {  }                /* Tag */
* {   }                     /* Universal (Slowest) */
#content [title='home']     /* Universal */



#main-nav > li {   }  /* Slower than it might seem */

</pre>

ul#main-navigation {  } /* Never do this */

ID's are unique, so they don't need a tag name to go along with it. Doing so makes the selector less efficient.

Don't do it with class names either, if you can avoid it. Classes aren't unique, so theoretically you could have a class
name do something that could be useful on multiple different elements. And if you wanted to have that styling be different
depending on the element, you might need to tag-qualify (e.g. li.first), but that's pretty rare, so in general, don't.


html body ul li a {  } /* Descendant selectors are the worst  */
</dd>


<dd>What is CSS Specificity</dd>
<dd>
<strong>Ans</strong>
Crescent order of specificity

The following list of selectors is by increasing specificity:

Universal selectors - *
Type selectors - [input="text"]
Class selectors - .abc
Attributes selectors - li
Pseudo-classes li:first-child
ID selectors - #xyz
Inline style

The !important exception - When an !important rule is used on a style declaration, this declaration overrides any other
declaration made in the CSS, wherever it is in the declaration list. Although, !important has nothing to do with specificity.
Using !important is bad practice because it makes debugging hard since you break the natural cascading in your stylesheets.

The :not exception - The negation pseudo-class :not is not considered as a pseudo-class in the specificity calculation.
Although, selectors placed into the negation pseudo-class count as normal selectors.

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
</dd>


<dd>Writing efficient CSS</dd>
<dd>
<strong>Ans</strong>
The style system breaks rules up into four primary categories:

ID Rules
Class Rules
Tag Rules
Universal Rules


Guidelines for efficient CSS
1. Avoid universal rules
2. Don’t qualify ID rules with tag names or classes - (button#backButton, .menu-left#newMenuIcon)
3. Don’t qualify class rules with tag names - (treecell.indented)
4. Use the most specific category possible - (.treecell-mailfolder)
5. Avoid the descendant selector - (treehead treerow treecell {...})
6. Tag category rules should never contain a child selector (treehead > treerow > treecell {…})

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS
</dd>


<dd>What is border-collapse</dd>
<dd>
<strong>Ans</strong>
The border-collapse property is for use on <table> elements (or elements made to behave like a table through display:
table or display: inline-table). There are two values:

a. separate (default) - in which all table cells have their own independent borders and there may be space between those cells as well.
b. collapse - in which both the space and the borders between table cells collapse so there is only one border and no space between cells.
</dd>

<dd>Margin Collapsing</dd>
<dd>
<strong>Ans</strong>
Vertical margins on different elements that touch each other (thus have no content, padding, or borders separating them)
will collapse, forming a single margin that is equal to the greater of the adjoining margins. This does not happen on
horizontal margins (left and right), only vertical (top and bottom).
</dd>

<dd>In CSS what does the + (plus) selector do?</dd>
<dd>
<strong>Ans</strong>
The adjacent selector, selects only the element following the + in the declaration that is
immediately preceded by the element before the + in the declaration. The example below
will only select p elements that immediately follow div elements.

<pre>
div + p {
 color: red;
}


<div>…</div>
<p>…</p> <!-- This will be selected -->
<p>…</p> <!-- This won't -->
</pre>
</dd>

<dd>In CSS what does the > (greater than) selector do?</dd>
<dd>
<strong>Ans</strong>
It is the operator for selecting direct children, i.e. which operator would you use to select
only immediate children of the parent rather than any matching child element. The difference
between the standard x y and x > y is that the latter will only select direct children.

<pre>
div > span {
 color: red;
}

<div>
 <span>…</span> <!--This will be selected -->
 <p>
 <span>…</span> <!-- This won't -->
 </p>
</div>
</pre>
</dd>

<dd>In CSS what does the ~ (tilde) selector do?</dd>
<dd>
<strong>Ans</strong>
This sibling combinator is similar to x + y , however, it’s less strict. While an adjacent
selector ( div + span ) will only select the first element that is immediately preceded by the
former selector, this one is more generalized. It will select, referring to our example below,
any span elements, as long as they follow a div

<pre>
div ~ span {
 color: red;
}

<div>…</div>
<span>…</span> <!--This will be selected -->
<span>…</span> <!--This will too -->
<p>
 <span>…</span> <!--This won't -->
</p>
<span>…</span> <!--This will too -->
</pre>
</dd>


<dd>In CSS what are pseudo elements?</dd>
<dd>
<strong>Ans</strong>
Pseudo-elements are used to address sub-parts of elements. They allow you to set style on
a part of an element's content beyond what is specified in the document. Pseudo-elements
can be used for common typographic effects such as initial caps and drop caps. They can
also address generated content that is not in the source document (with the "before" and
"after"

:after
:before
:first-letter
:first-line
:selection

</dd>

<dd>In CSS what are the restrictions on using :last-child CSS selector</dd>
<dd>
<strong>Ans</strong>
It doesn't work on older browsers, namely IE8 or lower
</dd>

<dd>In order to vertically align an inline block child element of unknown
    height in a block element of known height, what CSS properties might
    you set on the parent element?</dd>
<dd>
<strong>Ans</strong>
line-height set to the same height as the parent element
display: table-cell

<pre>
.parent {
 height: 50px;
 line-height: 50px;
 vertical-align: middle;
}
.child {
 display: inline-block;
}
/* Or */
.parent {
 display: table-cell;
 vertical-align: middle;
}
.child {
 display: inline-block;
}
</pre>

</dd>

<dd>CSS Counters</dd>
<dd>
<strong>Ans</strong>
CSS counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many
times they're used. This lets you adjust the appearance of content based on its placement in the document. CSS counters
are an implementation of Automatic counters and numbering in CSS 2.1.

<pre>
body {
  counter-reset: section;           /* Set the section counter to 0 */
}
h3:before {
  counter-increment: section;      /* Increment the section counter */
  content: "Section " counter(section) ": "; /* Display the counter */
}

<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
</pre>
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Counters
</dd>

<dd></dd>
<dd>
<strong>Ans</strong>
</dd>





CSS Hacks ?


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





<dt>HTML</dt>

<dd>What is doctype</dd>
<dd><strong>Ans</strong>
The term DOCTYPE tells the browser which type of HTML is used on a webpage. In turn, the browsers use DOCTYPE to
determine how to render a page. Failing to use DOCTYPE or using a wrong DOCTYPE may load your page in Quirks Mode

New Doctype : Instead of typing out a ridiculously long DOCTYPE statement to tell the browser how to render your webpage,
this long line of code has been truncated to <!doctype html>.
</dd>

<dd>What’s the difference between standards mode and quirks mode?</dd>
<dd><strong>Ans</strong>
Quirks Mode is a default compatibility mode and may be different from browser to browser, which may result to a lack of
consistency in appearance from browser to browser.
</dd>

<dd>What are the limitations when serving XHTML pages?</dd>
<dd><strong>Ans</strong>
Perhaps the biggest issue is the poor browser support XHTML currently enjoys. Internet Explorer and a number of other
user agents cannot parse XHTML as XML. Thus, it is not the extensible language it was promised to be.
</dd>

<dd>What kind of things must you be wary of when design or developing for multilingual sites?</dd>
<dd><strong>Ans</strong>
1. set the primary language <html  lang="en" xml:lang="en">
2.If you wanted to include a passage in French on your page you would need to use the ‘lang’ attribute to mark the change
in language. The ‘lang’ attribute can be used with almost every HTML element, making it very easy to change languages
within a page. To include a French quotation on an English page you would simply add the lang attribute to the blockquote tag:
<pre>
<blockquote lang=”fr”>

<p>Le plus grand faible des hommes, c'est l'amour qu'ils ont de la vie.</p>

</blockquote>
</pre>
3. link - <a href="" lang="fr" hreflang="fr">Francais</a>
4. In order to make language identification easier for Google, Google recommends only using one language per page.
5. Language direction - <html dir="rtl">
6. Character encoding - <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
7. Font sizes -
<pre>
HTML
<html lang="en"> or <html lang="zh">
CSS
:lang(en) {
font-size: 85%;
font-family: arial, verdana, sans-serif;
}
:lang(zh) {
font-size: 125%;
font-family: helvetica, verdana, sans-serif;
}
</pre>
This technique is supported in Firefox, Opera and Internet Explorer 8 and higher. Chrome and Safari do not support this
pseudo class.

If you want to support web-kit browsers and earlier versions of Internet Explorer as well, the second option would be to
use classes on the body element for each language required:
<pre>
HTML
<body class="english"> or <body class="chinese">
CSS
.english {
font-size: 85%;
font-family: arial, verdana, sans-serif;
}
.chinese {
font-size: 125%;
font-family: helvetica, verdana, sans-serif;
}
</pre>
http://www.nomensa.com/blog/2010/7-tips-and-techniques-for-multi-lingual-website-accessibility/
</dd>

<dd>What are data- attributes good for?</dd>
<dd><strong>Ans</strong>
The HTML5 data- attribute is a new addition that assigns custom data to an element. It was built to store sensitive or
private data that is exclusive to a page or application, for which there are no other matching attributes or elements.
</dd>


<dd>What are the various techniques for clearing floats?</dd>
<dd><strong>Ans</strong>
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
CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist
of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of
the animation's style, as well as possible intermediate waypoints along the way.

Advantages
1. They're easy to use for simple animations; you can create them without even having to know JavaScript.
2. The animations run well, even under moderate system load. Simple animations can often perform poorly in
JavaScript (unless they're well made). The rendering engine can use frame-skipping and other techniques to keep the
performance as smooth as possible.
3. Letting the browser control the animation sequence lets the browser optimize performance and efficiency by,
for example, reducing the update frequency of animations running in tabs that aren't currently visible.

The sub-properties of the animation property are:
1. animation-delay
2. animation-direction
3. animation-duration
4. animation-iteration-count
5. animation-name
6. animation-play-state
7. animation-timing-function
8. animation-fill-mode

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations
</dd>



<dd>KeyFrame Animatiom</dd>
<dd>
<strong>Ans</strong>
It is a frame based animation. The animation gradually change from current style to the new style.

<pre>
h1 {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>
</dd>


<dd>CSS Transform</dd>
<dd>
<strong>Ans</strong>
CSS transforms change the position and shape of the affected content without disrupting the normal document flow.

transform-origin - Specifies the position of the origin. By default it is at the center of the element and can be moved.
It is used by several transforms, like rotations, scaling or skewing, that need a specific point as parameter.

transform - Specifies the transforms to apply to the element. It is a space separated list of transform, which are
applied one after the other, as requested by the composition operation.

<pre>
<div style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;">
  <iframe src="http://www.google.com/" width="600" height="500"></iframe>
</div>
</pre>

3D specific CSS properties

Setting up a perspective - The first element to set is the perspective. The perspective is what gives the 3D impression.
The farther from the viewer the elements are, the smaller they are.

perspective-origin:-50px -50px;
perspective-origin:50% 50%;


http://desandro.github.io/3dtransforms/
</dd>

HTML5 controls and new tags ?
<dd>
<strong>Ans</strong>
article, aside, figure, figcaption, nav, footer, header, svg, canvas, section,
</dd>

What elements have disappeared?
As mentioned above, <frame> and <frameset> have been eliminated. Other elements that are no longer supported include: <noframe>, <applet>, <bigcenter> and <basefront>.

What are some new input attributes in HTML5?
There are many new form elements including: datalist, datetime, output, keygen, date, month, week, time, number, range, email, and url.


<dd>HTML5 APIs and Canvas</dd>
<dd>What are the new features and APIs in HTML5 ?</dd>
<dd><strong>Ans</strong>
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

<dd>chaining</dd>
<dd><strong>Ans</strong>
<pre>
​$(document).ready(function(){
    $('#dvContent').addClass('dummy')
          .css('color', 'red')
          .fadeIn('slow');
});​
</pre>
</dd>


<dd>Deferred</dd>
<dd><strong>Ans</strong>
the Deferred object provides a way to register multiple callbacks into self-managed callback queues, invoke callback
queues as appropriate, and relay the success or failure state of any synchronous or asynchronous function.
<pre>
$.get("test.php").done(
    function(){ alert("$.get succeeded"); }
);

$.get("test.php")
    .done(function(){ alert("$.get succeeded"); })
    .fail(function(){ alert("$.get failed!"); });
</pre>

And it seems that the existing ajax() method callbacks can be chained rather than declared in the settings:
<pre>
var jqxhr = $.ajax({ url: "example.php" })
    .success(function() { alert("success"); })
    .error(function() { alert("error"); })
    .complete(function() { alert("complete"); });
</pre>
</dd>


<dd>.end()</dd>
<dd><strong>Ans</strong>
<pre>
$('.tree')
    .find('.branch')
        .find('.leaf')
        .addClass('tacks-onto-leaf')
        .end()
    .addClass('tacks-onto-branch')
    .end()
.addClass('tacks-onto-tree');
</pre>
</dd>


<dd>queue()</dd>
<dd><strong>Ans</strong>
Queues in jQuery are used for animations. You can use them for any purpose you like. They are an array of functions
stored on a per element basis, using jQuery.data(). They are First-In-First-Out (FIFO). You can add a function to the
queue by calling .queue(), and you remove (by calling) the functions using .dequeue().

The default queue in jQuery is fx. The default queue has some special properties that are not shared with other queues.

1. Auto Start: When calling $(elem).queue(function(){}); the fx queue will automatically dequeue the next function and run
it if the queue hasn't started.
2. 'inprogress' sentinel: Whenever you dequeue() a function from the fx queue, it will unshift() (push into the first
location of the array) the string "inprogress" - which flags that the queue is currently being run.
3. It's the default! The fx queue is used by .animate() and all functions that call it by default.
</dd>

<dd>eq() vs get()</dd>
<dd><strong>Ans</strong>
.get() and .eq() both return a single "element" from a jQuery object array, but they return the single element in different forms.

.eq() returns it as a jQuery object, meaning the DOM element is wrapped in the jQuery wrapper, which means that it accepts jQuery functions.

.get() return a raw DOM element. You may manipulate it by accessing its attributes and invoking its functions as you
would on a raw DOM element. But it loses its identity as a jQuery-wrapped object, so a jQuery function like .fadeIn won't work.

</dd>

<dd>Design Patterns</dd>
<dd>What is design pattern ?</dd>
<dd><strong>Ans</strong>
Design Pattern is a solution of a common problems
</dd>

<dd>Name some design pattern</dd>
<dd>
<strong>Ans</strong>
Singleton Pattern, Module Pattern, Factory Pattern, Command Pattern, Constructor Pattern, Mixin Pattern, Prototype Pattern
</dd>

<dd>About common design patterns - Singleton, Module, Factory etc</dd>
<dd>
<strong>Ans</strong>
Singleton : In this pattern we restrict creation of multiple instances of an object. This pattern provides a solution to use a single instance of an object within a application.
Module: In this pattern we enclose module functions & variables into a namespace to provide module specific functionalities without conflicting with other modules.
Factory: In this pattern we implement a common solution to create different type of objects depending on data & configuration.

</dd>

<dd>What is MVC framework/pattern in UI development ?</dd>
<dd>
<strong>Ans</strong>
Purpose of MVC - Sepration of code based on functionalities like Models(Data Binding - Ajax Request), View (UI Component), Controller(Event Binding & Logic)
Controllers(Event Binding & Logic) :
1. Controllers are the glue between views and models. Most of their logic concerns event management.
2. Should be scoped to a single element, and not access or alter other parts of the DOM.

Views(UI Component) :
1. Should be logic less except for flow control and helper functions.
2. Should be passed all the data they need to render directly. It should all be available in the current scope.

Models(Data Binding - Ajax Request)
1. Should purely be concerned with data, manipulating data and decorating data.
2. Should never access controllers or views.
3. Should contain all data validations.

Routers
1. Should be as logic-less as possible.
2. Should not know about or access the DOM.

Global state
1. Should be kept to a minimum as it arguably violates MVC. You can't get around it for some things though, like the current user, current view, CSRF token etc.
2. Should never be stored in global variables.
3. Should all be stored in one place (such as a singleton instance of a model).

Modules
1. You should always use a module system, whether it's CommonJS, AMD, ES6 modules, or something equivalent.
2. Never set or access global variables.
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
3. Use Efficient CSS Selectors
4. Put CSS in document Head
5. Leverage browser caching - Setting an expiry date or a maximum age in the HTTP headers for static resources instructs
the browser to load previously downloaded resources from local disk rather than over the network.
6. Minimize redirect
7. Minimize DNS looksups
8. Avoid bad requests
9. Combine external JS & CSS
10. Optimize Images & Combine images using css sprites
11. Optimize the order of styles & scripts
12. Avoid CSS @import
13. Avoid document.write
14. Minimize Request Size - Keeping cookies and request headers as small as possible ensures that an HTTP request can fit into a single packet.
15. Enable compression
16. Remove unused CSS
17. Minify CSS & JS
18. Specify Image dimensions

https://developers.google.com/speed/docs/best-practices/rtt

</dd>


<dd>Cross browser compatibility issues and fixes ?</dd>
<dd>
<strong>Ans</strong>

</dd>

<dd>What are the pros and cons of using preprocessors such as SASS or
    LESS, CoffeeScript or TypeScript?</dd>
<dd>
<strong>Ans</strong>
Cons:
Danger of bloat and unecessary code
Needs to be compiled and adds extra build steps
Abstraction from language
Can be difficult when trying to debug issues from compiled code
Requirement for developers to learn new syntax
Can be problematic for less experienced developers to understand generated code

Pros:
Modularisation
Code reuse
Nested styles
Inheritance in SASSAbstract styles inSASS
Mixins in SASS
Functions in SASS
Better readability
Simplified syntax
Better inheritance implementation
Simplifying complex expressions
Often less code to write / maintain

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


<dd> Scrum </dd>
<dd>
standup - daily scrum
calculate story points - scrum poker - do check velocity - scale point achieve - if anyone on leave then plan next sprint accordingly
retro
end of sprint - demo
story point calculate fibonacci
Small Releases
Story Board: ToDo, Progress, Review, Done
</dd>


<dd>Jquery</dd>
<dd>http://code.tutsplus.com/tutorials/20-helpful-jquery-methods-you-should-be-using--net-10521</dd>

<dd>Google Style Guide</dd>
<dd>https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml</dd>