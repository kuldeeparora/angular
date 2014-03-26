With the growth and strength of HTML5 and the increasing performance in modern browsers, many JavaScript frameworks have been created to help develop rich client applications. These frameworks/libraries have given developers a huge toolkit to build enterprise complexity into client-side applications. Server side frameworks are becoming a thing of the past and being replaced with applications written in Backbone, Ember, AngularJS, Knockout, etc.

So why am I talking about AngularJS over frameworks/libraries like Backbone, Ember, or Knockout?

For me, the major points of separation in AngularJS’s favor are the following:

    Good documentation
    Write less code to do more
    Backed by Google
    Good developer community
    Simple Data-Binding
    Small footprint

What I am not doing is a side-by-side comparison of the top contenders in this area – we’ll save that for a future blog, by me or one of my colleagues. The goal of this post is to pipe your interest and run through a few key features of AngularJS - the "Super-heroic JavaScript MVW Framework". Let’s begin:

Key Features of AngularJS

Scope
The job of the Scope is to detect changes to model objects and create an execution context for expressions.
There is one root scope for the application (ng-app) with hierarchical children scopes. It marshals the model to the view and forwards events to the controller.


Controller
The Controller is responsible for construction of the model and connects it to the view (HTML). The scope sits between the controller and the view. Controllers should be straightforward and simply contain the business logic needed for a view. Generally you want thin controllers and rich services. Controllers can be nested and handle inheritance. The big difference in AngularJS from the other JavaScript frameworks is there is no DOM manipulation in controllers. It is something to unlearn when developing in AngularJS.

Model
In AngularJS, a Model is simply a JavaScript object. No need to extend anything or create any structure. This allows for nested models  - something that Backbone doesn’t do out-of-the-box.

View
The View is based on DOM objects, not on strings. The view is the HTML. HTML is declarative – well suited for UI design. The View should not contain any functional behavior. The flexibility here is to allow for multiple views per Controller.

Services
The Services in AngularJS are singletons that perform common tasks for web applications. If you need to share common functionality between Controllers, then use Services. Built-in AngularJS, Services start with a $. There are several ways to build a service: Service API, Factory API, or the $provide API.

Data Binding
Data Binding in AngularJS is a two-way binding between the View and the Model. Automatic synchronizing between views and data models makes this really easy (and straightforward) to use. Updating the model is reflected in View without any explicit JavaScript code to bind them together, or to add event listeners to reflect data changes.

Directives
Now this is cool. AngularJS allows you to use Directives to transform the DOM or to create new behavior. A directive allows you to extend the HTML vocabulary in a declarative fashion. The ‘ng’ prefix stands for built-in AngularJS directives. The App (ng-app), Model (ng-model), the Controller (ng-controller), etc. are built into the framework. AngularJS allows for building your own directives. Building directives is not extremely difficult, but not easy either. There are different things that can be done with them. Please check out AngularJS’s documentation on directives.

Filters
The Filters in AngularJS perform data transformation. They can be used to do formatting (like I did in my Directives example with padding zeros), or they can be used to do filter results (think search).

Validation
AngularJS has some built-in validation around HTML5 input variables (text, number, URL, email, radio, checkbox) and some directives (required, pattern, minlength, maxlength, min, max). If you want to create your own validation, it is just as simple as creating a directive to perform your validation.

Testable
Testing is a big concern for enterprise applications. There are several different ways to write and run tests against JavaScript code, thus against AngularJS. The developers at AngularJS advocate using Jasmine tests ran using Testacular. I have found this method of testing very straightforward and, while writing tests may not be the most enjoyable, it is just as importable as any other piece of developing an application.

Conclusion
I have enjoyed developing with AngularJS. I hope this post has, at the very least, convinced you to spend a couple of hours playing with AngularJS.

To start, spend some time going through the AngularJS tutorial. Then create your own Custom AngularJS Plunker and see how quickly client-side development can be. As I said at the beginning, AngularJS has a really good community and very clean documentation, which goes into much more detail than this post. Thanks to the AngularJS team for developing this framework.