<pre>
1. Programming Constructs
	a) Variables
     	var name=value;   //Local Variable
	    name=value;   //Global Variable

		Primitive Variables (number, string, boolean)
    		var x=10;   

     	Non primitive
	    	var arr=["a","d"];
	    	var x={name:'ddd',age:10};

	b) Operators
		Math Operators
			+, - , * , ++, --, /, %

		Conditional :
			 &gt; , &lt; , '&lt; =', '&gt; =', '==' , '===', '!=',

		Logical :
			!, && , ||

		Ternary Operator:
			?:
			condition ? true statement: false statement

		Type Operators:
			typeof , instanceof
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

	c) Statements
		single line statement, block statement
		var x=10;

		if(x=10){
			console.log("ddD");
		}


		i) Conditional statements
			if, switch

		ii) Looping Statements
			for, while, do while

2) Libraries and APIs

	Array
		var arr=new Array("item1","item2");
     	var arr=["dd","dd"];
     	var arr=[10,10,20];

     	var users=[
     		{name:'A',email:'a@gmail.com'},
     		{name:'A',email:'a@gmail.com'},
     		{name:'A',email:'a@gmail.com'}
     		];

     	users[0].name

     Math
		Math.sqrt(5)
		Math.cos(60);
		Math.PI

     RegExp
		var regexp=new RegExp(/hello/);
		regexp.test("hello m1 ");

     Date
		var d=new Date();
		d.getMonth();

3) Functions

    function fun1(){
		//console.log();
    }
    fun1()

    function sum(a,b){
    	return a+b;
    }
    console.log(sum(20,30))

4) Objects

	//Class Declaration

    function Person(name, age){
    	this.name=name;
    	this.age=age;
		this.printName=function(){
     		alert(this.name);
     	}
     }

     Person.prototype.displayInfo=function(){
     	alert(this.name+ " "+ this.age");
     }

     var p=new Person("Kuldeep",30);
     p.printName();

     // JSON Object

     var obj={
		name:'Kuldeep',
     	age:30,
     	printName:function(){
     		alert(this.name);
     	},
     	displayInfo:function(){
     		alert(this.name+" "+this.age);
     	}
     }
</pre>

<pre>
“Semicolons: Semicolons are optional in JavaScript. However, I recommend always including them, because otherwise JavaScript can guess wrong about the end of a statement.”<br>
“Semicolons terminate statements, but not blocks. There is one case where you will see a semicolon after a block: a function expression is an expression that ends with a block. ”
</pre>

<pre>
In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:

var TestVar;
alert(TestVar); //shows undefined
alert(typeof TestVar); //shows undefined
null is an assignment value. It can be assigned to a variable as a representation of no value:

var TestVar = null;
alert(TestVar); //shows null
alert(typeof TestVar); //shows object
From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.
</pre>

