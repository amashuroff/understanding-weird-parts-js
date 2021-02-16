# Understand the language, don't imitate.

---

### Parameters and Arguments

- Parameters are variables listed as a part of the function definition. f (a, b) {}
- Arguments are values passed to the function when it is invoked. f(1,2)

## Compilations vs Polyfills

- Compiling a new feature which actually existed in the ES5 with Babel
- When the feature has not existed in ES5, you can't compile it, you need to use polyfill
- polyfill re-writes this new feature in the old style way, old code

## Strict mode

- Allows you to put a piece of a program or a function into strict operating mode
- It is a string because an older browser would fail to (use strict) keyword (since it is a new feature that has never existed before), but if it sees a string, it would think, oh, it's just a string, it wont do anything, ill ignore it!
- stops default THIS object being a global object, it's going to be undefined

### Strict

- using a var before declaration automatically causes an error
- stops you from using keywords that are reserved for future v. of js
- doesn't allow us to delete functions and variables
- makes eval a bit safer (eval() evaluates js expressions by just passing in a string), variables in eval leak out of the function and can be accessible.

### Non-Strict

- using a var before declaration automatically creates a global var

```javascript
// Mistakes without strict mode

//
var theVal = 0;
thVal = 1; // simple mistake, won't yell at you

if (theVal > 1) {
  console.log("hello");
}
//
var let = 1; // using reserved keywords for future versions of js
//
var foo = 1;
delete foo; // allows to delete functions, variables and arguments to the functions
function foo1(arr) {
  delete arr;
}
delete foo1;
//
// var eval = 1;    // allows to use keyword for vars/f
eval("var a = 1"); // vars leak out outside
// console.log(a);
//
```

### Pass by value, or pass by reference (into a function)

- primitives are passed into functions by value, (copy of the variable)
- if you change a value of a primitive type inside a function, the changes won't affect the variable in the outer scope

- passing by reference means that you are passing something that points to something (pointer to where the value in the memory is stored)

### Rest operators

- every function gets a secret property called arguments --> array like object with all the args inside, but the problem with it is, that you look at the src code of the function and don't know exactly what is going to be passed into the function
- if you had a mandatory arg and options, you would want to slice arguments starting from the end of the mandatory arguments, but the thing is that arguments property is not an array, and it has no slice method, the workaround for this was to use Array.prototype.slice.call(arguments, (start))
- ...options --> collapses all the arguments in the single array, which is accessible as an options, or some other word
- should be the last argument, "put rest of the things there"

### Spread operator

- exploding array into individual values, ...arr
- make a copy of an array easily

### Template strings

- whatever the RESULT (of an expression, variable, function) is, it is going to be printed out inside ${}
- template tags, useful for modifying template strings, use the special strings keyword

```javascript
function h1(strings) {
  return `<h1>${strings[0]}</h1>`;
}

console.log(h1`alex`);
```

### Template tags

- very useful feature enhance already existing template string
- first parameter is an array of strings passed into template tag function
- all subsequent params are values passed in template literal

```javascript
function text(strings, ...values) {
  let body = "";
  // accept all strings between the values in the strings arr
  // accept all the values using rest operator
  for (let i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || "");
  }
  return `<h1>${body}</h1>`;
}

text`Hello world ${1}`;
```

### Types in JS

- Primitives: Boolean, Number (incl. NaN), Strings, Null, Undefined
- Objects
- Incorrectly Null has a type of Object
- Undefined is used by JS and means no value. Used for uninitialized vars, missing parameters to functions, unknown variables and unknown properties
- Null is used by programmers to indicate no value, only a human will ever set a variable to a value of null. In statically typed languages like Java, null is a concept of an absence of the value, whereas in JS it has an actual value of null.
- NaN, the only JS value that is unequal to itself, check for NaN --> is me equal to myself?

### Dynamically vs Statically typed language

- In Javascript the type is inferred by whatever value we've assigned to a variable

### == and ===

- == equality of the value
- === equality of the type and value

### Scope

- concept of how long a variable lives before it dies
- Global scope, all global vars are the properties of the window obj
- Local scope, cannot be accessed outside of the function block (scope)
- Block scope, {}

### Hoisting

- all function and var! declarations are put on the top of the current scope
- with let however, it cannot be accessed before initialization

```javascript
// looks like this
{
  // variables
  console.log(a);
  var a = 1;

  console.log(b); // error
  let b = 1;

  // functions
  foo();
  function foo() {
    console.log("hoisted");
  }

  exp(); // error
  var exp = function () {
    console.log("function expression hoisting");
  };

  // what happens:
  var exp;

  exp();

  exp = function () {
    console.log("function expression hoisting");
  };
}
```

### Scope Chain

- something want to use a variable --> look in the local function scope = no value , look in the outer function scope
- scope chain is defined lexically --> in order in which it is written in code

```javascript
// lexical scope and scope chain

// outer scope of foo is global scope
// because scope is resolved lexically - where it is written in the file
function foo() {
  console.log(myvar);
}

function boo() {
  var myvar = 1;
  foo();
}

boo(); // error

// correct

function boo1() {
  var myvar1 = 1;
  function foo2() {
    console.log(myvar1);
  }
  foo2();
}

boo1(); // ok
```

### IIFE

- () surrounding the function, or an expression make this expression/f invocable
- has it's own scope

### Function closures

- When a function returns a function, returned function keeps a reference to any variables that it needs to execute
- look in local --> closure --> global for a variable
- refer to vars in outer scopes

```javascript
let foo = [];

for (let i = 0; i < 10; i++) {
  foo[i] = function () {
    return i;
  };
}

console.log(foo[0]());
```

### Destructuring

- Way to extract values into variables from objects or arrays

```javascript
// destructuring pattern
// don't over use it
// keep it simple and only at 1 level, no nesting

// in the obj, take the property first and store it into f
const obj = { first: "alex", age: 25 };
const { first: f, age } = obj;

// arrays
const arr = ["apple", 23, "banana"];
const [apple, ...banana] = arr;
console.log(apple, banana);

// function arguments
function moo({ x = 0 }) {
  console.log(x);
}
moo({ x: 2 });
```

### Looping

```javascript
const arr = [1, 2, 3];

for (let index in arr) {
  console.log(index);
  // thinks that an index is a prop of an object
  // gives an index as a string
  console.log(typeof index);
}
```

### THIS keyword

- in JS, this is determined by the calling context;
- WHO calls the function, which object, window or the one you've just created
- it's not lexical, it is determined by context, or how the function is executed

```javascript
"use strict";
const obj = {
  checkThis: function () {
    const self = this;
    console.log(this);

    // checkOther's calling context is window here
    function checkOther() {
      console.log(this);
      console.log(self);
    }
    checkOther();
  },
};

// calling context is obj
obj.checkThis();
```

### Call, Bind, Apply

- Call a function with a specific this and arguments, call(this, a, b, c)
- Apply a function with specific this and arguments as an array, apply(this, [a, b, c])
- Normally you will use call, unless a function takes in a variable number of parameters
- Bind a this to a function EXPRESSION. Doesn't work of function declarations, because bind is applicable to the function object that is created

```javascript
function c(a, b = 2) {
  console.log(a, b);
}
c.call(null, 1);

function a(...args) {
  console.log(args);
}
a.apply(null, [1, 2, 3, 4, 5]);

// creates a function object and assigns it to b variable
let b = function () {
  console.log(this);
}.bind({});

// b = b.bind(1), if let

b();
```

### Arrow function

- Borrows this keyword from the lexical surroundings

### OOP

- it's a programming paradigm, based on the concept of objects
- it uses objects to describe real world
- objects are the building blocks of the application
- they are self-contained blocks of code that interact with each other
- they interact with use of API's

### How to model real world data using a Class

- Abstraction: ignore/hide details that don't matter
- Encapsulation: show public vs private methods and data
- Inheritance: Child class extends the Parent class.
- Polymorphism (many shapes, greek): Child class can overwrite a methods, inherited from a Parent class.
- class inherits from a class

### Difference between classical and Prototypal inheritance

- Classical -> class (blueprint) -> instance of that class (house built from the blueprint)
- Prototypal -> New objects are created from existing objects, (build a house from existing house)
- in JS there is a method that looks like classical inheritance, emulation (at least in code)
- Pseudo-Classical pattern, Prototypal pattern

### OOP in JS

- all objects in JS are linked to a prototype object, each object has a prototype
- prototype object contains methods and properties, that all objects connected to this prototype can access and use, this behavior is called prototypal inheritance
- instance inherits from a class
- Object delegates it's behavior to a prototype
- console.dir - to get the actual object

### Prototype

- Each and every function in JS automatically has a property called prototype
- prototype of an object (proto) is a prototype property of a constructor function (prototype of linked objects property)
- Person.prototype is a prototype that is going to be used for all the objects created with this constructor function
- works also with classes but not with Object.create()

```javascript
"use strict";
// function constructor
function Person(first, last) {
  this.first = first;
  this.last = last;

  // never do this
  this.sayHi = function () {
    return "Hi, I am " + this.first;
  };
}

const alex = new Person("Alex", "M");
console.log(alex);
// new {} is created
// function is called this = {}
// {} linked to a prototype property of a Person
// function automatically returns {}

const valeriya = {};
Person.call(valeriya, "Valeriya", "A");
console.log(valeriya);
```

### Prototype chain

- proto points to the this object's prototype
- JS traverses the prototype chain, when looking for a property and only turns undefined when it can't find property in all the objects in the chain

```javascript
const animal = {
  kind: "animal",
};
// animal is going to be the prototype of alex object
// second parameter describes the properties you want your object to have
const alex = Object.create(animal, {
  food: {
    value: "mango",
  },
});

console.log(alex);
```

### What is CORS

- Cross origin resource sharing
- CORS allows you to break the same origin policy of a browser
- SOP: request some data from Moo.com to Foo.com, RESPONSE is blocked by SOP
- Since the response is blocked, and put/delete/post methods still work, what's the purpose of blocking anything then?
- to get around the above point, CORS sends pre-flight request, Options, with Access Control Request Method, is this method allowed?
- Then, if everything is OK, Foo.com will send Access Control Allow Origin: Moo.com, Access Control Allow Methods PUT for example

### What si JSONP

- JSONP predates the CORS standard
- only works with get
- json will return json response wrapped into a function
- script tag does not have any limitations, from which domain it can pull script from
- you create a script tag with src set to url from which you want to get data
- it is unsafe

### Difference between event bubbling and capturing

- we have a button that was clicked
- event is fired by the root objects and travels directly down the tree to the button (target)
- it also touches every single parent of this button
- when reached the bottom, it goes all way back to the root element

1. Event Capturing
2. Event Bubbling

- by Default event listener listens to the bubbling phase

### Difference between stopPropagation() and preventDefault()

- stopPropagation stops from going through bubbling phase or capturing phase
- preventDefault stops the default behavior (checkbox tick would not be applied for example)

### Misc

- we can change global var (if not const) in the scope of the function
- if we pass an argument to the function by value (primitives), we pass the copy of that var.

```javascript
let a = 0;
var b = 0;

function f(a) {
  a = 1;
  console.log(a);
  b = 1;
}

f(a);

console.log(a, b);
```
