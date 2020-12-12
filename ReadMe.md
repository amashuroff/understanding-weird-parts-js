# Understand the language, don't imitate.

---

## Compilations vs Polyfills

- Compiling a new feature which actually existed in the ES5 with Babel
- When the feature has not existed in ES5, you can't compile it, you need to use polyfill
- polyfill re-writes this new feature in the old style way, old code

## Strict mode

- Allows you to put a piece of a program or a function into strict operating mode
- It is a string because an older browser would fail to (use strict) keyword (since it is a new feature that has never existed before), but if it sees a string, it would think, oh, it's just a string, it wont do anything, ill ignore it!

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

- whatever the RESULT (of an expression, variable, function) is, it is going to be printed out inside ${},
- template tags, useful for modifying template strings, use the special strings keyword

```javascript
function h1(strings) {
  return `<h1>${strings[0]}</h1>`;
}

console.log(h1`alex`);
```

### Template tags

- very useful feature enhance already existing template string

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
