
## Best Practice
1. <h2>Avoid Heavy Nesting</h2>
    a. Code gets unreadable after a certain level of nesting.<br>
    b. A really bad idea is to nest loops inside loops as that also means taking care of several iterator variables (i,j,k,l,m...).
2. <h2>Optimize Loops</h2>
    a. Don’t make JavaScript read the length of an array at every iteration of a for loop. Store the length value in a different variable.<br>
    b. Keep computation-heavy code outside of loops. This includes regular expressions but first and foremost DOM manipulation.<br>
    c. You can create the DOM nodes in the loop but avoid inserting them to the document.
3. <h2>Keep DOM Access to a Minimum</h2>
    a. If you can avoid it, don’t access the DOM. <br>
    b. Seed the dataset with as much as you can and then call the method to render all out in one go.<br>
    Reason: It’s slow and there are all kinds of browser issues with constant access to and changes in the DOM.<br>
    Solution: Write or use a helper method that batch-converts a dataset to HTML.
4. <h2>Don’t Yield to Browser Whims</h2>
    a. Instead of relying on flaky browser behavior and hoping it works across the board... <br>
    b. Avoid hacking around and analyze the problem in detail instead.<br>
    c. Most of the time you’ll find the extra functionality you need is because of bad planning of your interface.
5. <h2>Don’t Trust Any Data</h2>
    a. Don’t believe the HTML document - Any user can meddle with it for example in Firebug.<br>
    b. Don’t trust that data reaches your function is of the right format. - Test with typeof and then do something with it.<br>
    c. Don’t expect elements in the DOM to be available. - Test for them and that they indeed are what you expect them to be before altering them.<br>
    d. Never ever use JavaScript to protect something. - JavaScript is as easy to crack as it is to code :)
6. <h2>Add Functionality with Javascript Not Content</h2>
    a. If you find yourself creating lots and lots of HTML in JavaScript, you might be doing something wrong.<br>
    b. It is not convenient to create using the DOM, it’s flasky to use innerHTML (IE’s Operation Aborted error), and it’s hard to keep track of the quality of the HTML you produce.<br>
    c. If you really have a massive interface that should only be available when JavaScript is turned on, load the interface as a static HTML document via Ajax.<br>
    d. That way you keep maintenance in HTML and allow for customization.
7. <h2>Build on the Shoulders of Giants</h2>
    a. Javascript is fun, but writing JavaScript for browsers is less so... start with a good library.<br>
    b. JavaScript libraries are specifically built to make browsers behave and you code more predictable by plugging browser holes.<br>
    c. Good libraries help you write code that works without keeping the maintenance overhead of supporting current browsers and those to come.<br>
8. <h2>Development Code is Not Live Code</h2>
    a. Live code is written for machines. Development code is written for humans.<br>
    b. Collate, minify and optimize your code in a build process.<br>
    c. Don’t optimize prematurely and punish your fellow developers and those who have to take over from them.<br>
    d. If we cut down on the time spent coding we have more time to perfect the conversion to machine code.
