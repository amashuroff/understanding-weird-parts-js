# Understand the language, don't imitate.

- код, который заставляет думать: неговорящие имена, плохие абстракции, неправильные структуры данных, сильная зависимость от контекста — плохой код.

---

### var / let / const

- var: имеет функциональную область видимости
- let / const: блочную область видимости

- var: hoisting, декларируется во время первого парсинга компилятором, можно определить до инициализации
- let / const: невозможно определить до инициализации

- let: можно менять значение переменной
- const: нельзя (но можно менять внутренности (наполнение) составного типа данных обьект (pointers))

### Literal

- A literal is when you refer to a value by literally writing it down in your program. For example, 2 is a number literal, and "Banana" is a string literal.

### Primitive values

- Strings - used for text
- Numbers - used for math calculations
- Undefined - used for unintentionally missing values
- Null - used for intentionally missing values
- BigInt - used for math calculations with big numbers
- Booleans - used for logical operations
- Symbols - used to hide implementation details

### Boxing Unboxing / Object Constructor

Values that are typeof "object" (such as an array) are additionally tagged with an internal [[Class]] property (think of this more as an internal classification rather than related to classes from traditional class-oriented coding)

You'll note that there are no Null() or Undefined() native constructors, but nevertheless the "Null" and "Undefined" are the internal [[Class]] values exposed.

But for the other simple primitives like string, number, and boolean, another behavior actually kicks in, which is usually called "boxing" (see "Boxing Wrappers”)

These object wrappers serve a very important purpose. Primitive values don't have properties or methods, so to access .length or .toString() you need an object wrapper around the value. Thankfully, JS will automatically box (aka wrap) the primitive value to fulfill such accesses.

New as of ES6, an additional primitive value type has been added, called "Symbol". Symbols are special "unique" (not strictly guaranteed!) values that can be used as properties on objects with little fear of any collision. They're primarily designed for special built-in behaviors of ES6 constructs, but you can also define your own symbols.

### Objects and functions

- Objects - used to group related data and code
- Functions - used to refer to code

### Symbols

- Unique values, totally unique keys, no values
- One main thing people do with symbols, use as an identifier for object properties
- they are not private, not hidden, they are just not obvious
- New as of ES6, an additional primitive value type has been added, called "Symbol". Symbols are special "unique" (not strictly guaranteed!) values that can be used as properties on objects with little fear of any collision. They're primarily designed for special built-in behaviors of ES6 constructs, but you can also define your own symbols.

### Parameters and Arguments

- Parameters are variables listed as a part of the function definition. f (a, b) {}
- Arguments are values passed to the function when it is invoked. f(1,2)
- Когда мы передаём аргумент при вызове функции, его значение присваивается параметру функции. Это неявное автоматическое присваивание, потому что в коде этой операции "не видно".

```javascript
const func = (x) => {
  // параметру x будет присвоено
  // значение аргумента при вызове функции
  console.log(x);
};

func(1); // => 1
// Это можно представить так, что
// внутри функции создаётся параметр x,
// которому присваивается значение аргумента:
// {
//   let x = 1;
//   console.log(x);
// };

func([1, 2]); // => [1, 2]
// Пример с передачей массива:
// {
//   let x = [1, 2]; ---> points to the original array / obj
//   console.log(x);
// };
```

### First-order functions, objects

- В языках программирования существует понятие "объекты первого рода (или класса)". Им обозначают элементы, которые могут быть переданы в функции, возвращены из функций и присвоены переменным (или константам)

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

### Objects and props

- Properties are wires, they point to values, properties start from objects
- You can't have more than 1 property with the same name in one object

### Strings

- \ перед символом, и символ "изолируется" от своей специфической роли и превратится в обычный знак в строке.
- \t — это табуляция, \n это перенос на новую строку.

### Modules

- one file - one module
- Каждый модуль имеет отдельную область видимости (Lexical environment) — т. е. все объявления переменных, функций и классов не будут доступны за пределами модуля (файла), если не экспортированы явно
- У каждого модуля есть неявный объект [[Exports]], в котором хранятся ссылки на все экспортируемые сущности, а ключом является идентификатор сущности (например, имя переменной). Это очень напоминает module.exports из модульной системы NodeJS, но [[Exports]] всегда объект, и его нельзя получить напрямую. Единственный способ его изменить — использовать оператор export.
- В случае же экспорта по умолчанию функции (не анонимной, естественно) или класса — они будут объявлены в области видимости модуля, а [[Exports]].default будет ссылкой на эту сущность.

- Включение модуля без импорта. Иногда бывает нужно, чтобы файл просто запустился.

```javascript
import "./worker";
```

### Imports Exports

- При использовании ключевого слова import необходимо указать расширение файла. Пути каталогов (например, './startup/index.js') также должны быть полностью указаны.

- Этот подход обеспечивает идентичное поведение import в среде браузера и на сервере с типовой конфигурацией.

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
- Область видимости (scope) — это широкое понятие, означающее, грубо говоря, «интерпретатор в разных местах кода видит разные штуки».
- Лексическая область видимости (Lexical scoping) — это конкретный механизм, одно из правил для области видимости. Этот механизм применяется в JavaScript и большинстве других языков. Под лексической областью видимости можно понимать просто механизм поиска значений: смотрим в текущей области, если нет — идём на уровень выше, и так далее. Слово «лексический» означает, что видимость задаётся исключительно текстом программы, исходным кодом.
- It would suck if there could only be one message variable in the whole program. Instead, when you define a variable, it becomes available in a part of your program. That part is called a “scope”

### Window

- это глобальный объект предоставляемый браузером, внутри которого содержатся все встроенные в браузерный JavaScript функции и свойства

### Closures

- Замыкания используют окружение (environment) - это область памяти, где записываются идентификаторы и значения из областей видимости. Не путайте с окружением, как средой исполнения.

### Hoisting

- all function and variable declarations are put on the top of the current scope
- with let however, it cannot be accessed before initialization
- Normally, you can only use a variable after its declaration with let or const has run. This can be annoying with functions because they may need to call each other, and it's hard to track which function is used by which others and needs to be defined first. As a convenience, when (and only when!) you use the function declaration syntax, the order of their definitions doesn't matter because they get "hoisted".
- This is a fancy way of saying that conceptually, they all automatically get moved to the top of the scope. By the time you call them, they're all defined.

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

// looping
for (const [key, value] of entries) {
  console.log(key);
  console.log(value);
}
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
- this — это не ссылка функции на саму себя и это не ссылка на область видимости функции.

When the function is called, an activation record is created, also known as the calling context. This record contains information about where the function was called from (call stack), how the function was called, what parameters were passed to it, etc. One of the properties of this entry is a link thisthat will be used throughout this function.

- В действительности this — это привязка, которая создается во время вызова функции, и на что она ссылается определяется тем, где и при каких условиях функция была вызвана.

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
- Usually, binding a function f to a particular this value and arguments means creating a new function that calls f with those predefined values. JavaScript has a built-in helper to do it called .bind, but you could also do it by hand. Binding was a popular way to make nested functions "see" the same value of this as the outer functions. But now this use case is handled by arrow functions, so binding is not used as often.

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

### Promises

- Технически, промис это специальный объект, который отслеживает асинхронную операцию и хранит внутри себя ее результат. Он возвращается всеми асинхронными функциями построенными на промисах.

- Независимо от содержимого колбек-функции, вызов then() всегда возвращает новый промис. А возврат колбек-функции становится доступным как параметр колбека следующего then(). Именно такая организация промисов позволяет строить цепочки без необходимости вкладывать вызовы друг в друга, тем самым избегая Callback Hell.

- Нарушение непрерывности (контроля) асинхронных операций частая ошибка даже у опытных программистов. В некоторых ситуациях ошибка заметна сразу, в других код начинает вести себя странно: часть запусков проходит без проблем, другая падает со странными ошибками.

- Чтобы этого не происходило, нужно всегда убеждаться в непрерывности асинхронных операций. Завершение любой операции должно приводить к какой-то реакции, кто-то всегда должен ждать этого момента.

- С технической точки зрения, промис — это объект, имеющий три состояния (см. конечные автоматы и автоматное программирование): pending, fulfilled и rejected. Промис начинается в состоянии pending, а затем, с помощью функций ("событий", как говорят в теории автоматов) resolve и reject переводится в одно из конечных (терминальных) состояний fulfilled или rejected. Перейдя однажды в эти состояния, промис уже не может откатиться назад или уйти в другое терминальное состояние. То есть после вызова resolve, нет способа привести промис в состояние rejected, вызывая функцию reject.

### Prototype chain

- proto points to the this object's prototype
- JS traverses the prototype chain, when looking for a property and only turns undefined when it can't find property in all the objects in the chain
- mutating a shared prototype is called prototype pollution

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

### Prototype vs **proto**

- the Prototype property is almoust unrelated to the core idea of prototypes, it is more related to the new operator
- **proto** means an object's prototype

### Difference between event bubbling and capturing

- we have a button that was clicked
- event is fired by the root objects and travels directly down the tree to the button (target)
- it also touches every single parent of this button
- when reached the bottom, it goes all way back to the root element

1. Event Capturing
2. Event Bubbling

- by Default event listener listens to the bubbling phase

### Event listeners

- Каждый обработчик события представляет собой функцию, которая будет вызвана в момент наступления события. Обработчики вызываются один за другим, в том же порядке, в котором они были определены.
- Возврат false внутри значения атрибута также приводит к отмене действия по умолчанию. (onclick, onsubmit etc )

### Event

Базовые свойства объекта-события Event:

- event.target - элемент, на котором произошло событие
- event.type - тип события

### Difference between stopPropagation() and preventDefault()

- stopPropagation stops from going through bubbling phase or capturing phase
- preventDefault stops the default behavior (checkbox tick would not be applied for example)

### Array Methods

- push and unshift change the initial array, all return new length of an array

### Arrays

- Arrays store links to objects or primitives stored inside, thats why you can store any type of value inside of an array
- Arrays are pseudo dynamic, you can change it's size, under the hood, array increases its size by 2x, and just moves all the links in the new array
- Every value in the array is an address with fixed size, independent of the data stored inside. Every address has a fixed size and type, we can access it in memory using offset formula
- Массив представляется цельным куском памяти, размер которого вычисляется по следующей формуле: количество элементов \* количество памяти под каждый элемент
- index in array is a memory offset relative to the start of the memory block (C progrm lang)

```javascript
const arrOfArrays = [
  ["a", "b"],
  ["a", "c"],
];
arrOfArrays.sort(); // will convert each array to string representation (toString())
```

### Objects

- Если имя константы соответствует имени свойства в объекте, то можно просто добавить имя константы в определение объекта без указания свойства
- Функция Object.assign() берёт объект, переданный первым параметром, и переносит в него всё из объектов, переданных остальными параметрами. Если свойство присутствовало и в первом объекте и во втором, то оно будет перезаписано значением из второго объекта.
- shallow copy не затрагивает вложенные объекты. Они оказываются в новом объекте по ссылке из старого
- Для реализации ассоциативных массивов (Обьект в JS) часто используют специальную структуру данных — хеш-таблицу. Она позволяет организовать данные ассоциативного массива удобным для хранения способом. Для этого хеш-таблица использует две вещи: индексированный массив и функцию для хеширования ключей
- Хеширование — операция, которая преобразует любые входные данные в строку (реже число) фиксированной длины. Функция, реализующая алгоритм преобразования, называется "хеш-функцией", а результат называют "хешем" или "хеш-суммой".
- Object.keys() - сортировка массива, сначала идут все целочисленные положительные ключи, если не целое или отриц, то в том порядке, в каком записаны

```javascript
// Destructuring
const person = { firstName: "Rasmus", lastName: "Lerdorf", manager: true };

const { manager: isManager } = person;

console.log(isManager); // => true

// Destr default values
const person = { firstName: "Rasmus", lastName: "Lerdorf" };

console.log(person.manager); // undefined
const { manager = false } = person;
console.log(manager); // => false

// Destruct deep
// const user = response.data.attributes;
// const links = response.data.links;
// const author = response.data.relationships.author;

const {
  links,
  attributes: user,
  relationships: { author },
} = response.data;
```

### Functions

- length is a property of the function objects and indicates how many arguments the function expects
- Arity, number of arguments taken by a function

```javascript
// определение функции следует обернуть в круглые скобки,
// чтобы обозначить границы определения для интерпретатора,
// которому нужно "понимать", что конкретно вы хотите вызвать
(() => console.log("I love JS"))();
```

### Higher order Functions

- Они реализуют обобщенный алгоритм задачи, делегируя обработку вызывающему коду,
  что позволяет не реализовывать алгоритм каждый раз.
- A higher-order function is a function that deals with other functions by taking them as arguments or returning them.

### Re-assignment

- There are three common cases when reassignments cause bugs: when the scope is very large (such as module scope or huge functions), when the value is a parameter (so it's unexpected that it would be equal to something other than what was passed), and when a variable is used in a nested function.

### Currying

- Currying is a transformation of the function from callable like f(a, b) to f(a)(b)
- in a currying an argument stored in a lexical environment
- In Javascript, every object can implement method valueOf that when the object is evaluated, the result would be the result of the method call.

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Simplest currying
// function with param z can traverse its hierarchical chain of scope bindings
const mul = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

// Transformation of a function to curry
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // returns the function that is ready to accept new args
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
const sum = (a, b) => {
  return a + b;
};
const curried = curry(sum);
// ----

// Another implementation of the curry function
const _sum3 = (x, y, z) => x + y + z;

const _sum4 = (p, q, r, s) => p + q + r + s;

function curry(fn) {
  // n of arguments we expect
  const N = fn.length;

  // define an inner function that will actually do the currying
  function innerFn(n, args) {
    return function actualInnerFn(a) {
      if (n <= 1) {
        return fn(...args, a);
      }
      return innerFn(n - 1, [...args, a]);
    };
  }

  // return an inner function with n of arguments to expect and an empty array to start
  return innerFn(N, []);
}

// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);

// console.log(sum3(1)(3)(2)); // 6
// console.log(sum4(1)(3)(2)(4)); // 10
// ----

// Variadic curry function
const curry = (fn) => {
  const innerFn = (N, args) => {
    // using variable arguments to a function
    return (...x) => {
      if (N <= x.length) {
        return fn(...args, ...x);
      }
      return innerFn(N - x.length, [...args, ...x]);
    };
  };

  return innerFn(fn.length, []);
};

// const sum = curry(_sum3);

// sum3(2, 3)(4); //9
// sum3(2)(3, 4); //9

// Infinite curry function + variadic

const infiniteVariadicCurry = (fn) => {
  const next = (...args) => {
    return (...vars) => {
      if (!vars.length) {
        return args.reduce((acc, a) => {
          return fn.call(null, acc, a); // doesnt matter what this is
        }, 0);
      }
      return next(...args, ...vars);
    };
  };
  return next();
};

// const iSum = infiniteCurry((x, y) => x + y);

// console.log(iSum(1, 2, 10)(3)(4)(2)());

// Infinite curry function without the last parenth
// More of a hack

function sum(...args) {
  // The usage of Object.assign here allows us to return a new function instance with bound arguments
  // and re-write a method
  return Object.assign(sum.bind(null, ...args), {
    valueOf: () => args.reduce((a, c) => a + c, 0),
  });
}

// преобразование обьекта в примитив
console.log(+sum(1)(2)(3)(1, 2, 3)); // 12
```

### Regex

- search through text and group searches together

```javascript
/e+/g // match how many e's as possible but at least one
/ea?/g // match a optionally
/ea*/g // optional but match as many as possible in a row
/.e/g // match any char that comes before, (can insert how many . as you want)
/\.e/g // match period followed by an e (escaping \)
/\w/g //match any word character (\W not a word char)
/\s/g //match any whitespace (\S not a whitespace)
/\w{4,5}/g // match any min/max chars in a row (basically a word)
/[fc]at/g // match any of the chars in char set [fc] followed by an at
/[a-zA-Z]at/g // can use ranges in char sets
/(t|T)/g // parenth are used for the groups, anything in a parenth is going to be in it's own group and act upon themselves
/(t|T){2,3}he/g // | alternation, match 2 or 3 chars of t or T followed by he
/^T/g // match the beginning of the entire statement
/\.$/g // match the end of the entire statement

// positive lookbehinds
// allow to lookbehind the actual thing you want to capture, but do not match it
/(?<=[tT])he/g
/(?<![tT])he/g // negative lookbehind to match everything that has no The or the before it

// look aheads
/(?=[tT])he/g
/(?![tT])he/g

// phone num regex
/(?<groupcode>\d{3})[ -]?\d{3}-?{3}/g // dash is optional -?, // naming the group // (?: non capturing group)

```

### Reduce

- результатом агрегации может быть любой тип данных — как примитивный, так и составной, например, массив
- возвращать аккумулятор надо всегда, даже если он не изменился.

### Immutability

- strings are immutable – they cannot change, we can only ever make new strings.

### Bundlers

- Bundlers introduce a compile step so JavaScript code is generated at build time. Code is processed to include dependencies and produce a single ES5 cross-browser compatible concatenated file

- The script defer attribute delays script execution until the document has loaded and parsed. Modules — including inline scripts defer by default.

### Operators

- оператор сложения имеет левую ассоциативность. Это значит, что в случае с составными сложениями процесс пойдёт слева направо, вот почему мы вначале видим 12 + 144, а потом 156 + 16

### URL object

```javascript
const myNewURL = new URL("https://www.youtube.com/");
const myUrl = new URL(window.location.href);

// console.log(myNewURL.host);
// console.log(myNewURL.hostname);
// console.log(myNewURL.toString());
// console.log(myNewURL.href);

// myNewURL.search = "?name=tom henry&age=21"; // least preferred way

// myNewURL.searchParams.set("age", 72); // preferred way
// myNewURL.searchParams.get("age");
console.log(myNewURL);
console.log(myUrl);

// can easily pass URL object into fetch function, like fetch(myURL)

// %20 - spaces and other characters that are not
// allowed in the URL should be encoded with the % sign,
// followed by hexadecimal value of that character (here it is space)
```

### Blobs and Files

- Blob stands for Binary Large Object and is a data type that can store binary data. It represents data like programs, code snippets, multimedia objects, and other things that don’t support JavaScript native format.
- Blobs work with many calls, used to process Files.
- The most important one is URL.createObjectURL(), which can be used to create url, that can be used in hrefs and stc attributes in html
- Basically, blob gives JS something like a temporary file, and letss you treat those files, like if they where files on a web server

```javascript
const inpFile = document.getElementById("inpFile");
const previewImg = document.getElementById("preview");

// every one of them uses Blob behind the scenes

// using URL.createObjectURL with uploaded files to show the preview of the file (img)
// much more efficient than file reader

// inpFile.addEventListener("change", (e) => {
//   console.log(e.target.files[0]);
//   console.log(URL.createObjectURL(e.target.files[0]));
//   previewImg.src = URL.createObjectURL(e.target.files[0]);
//   console.log(inpFile.files);
// });

// using FileReader

// inpFile.addEventListener("change", (e) => {
//   const reader = new FileReader();

//   reader.onload = () => {
//     console.log(reader.result);
//     console.log("hello reader");
//     previewImg.src = reader.result;
//   };

//   reader.readAsDataURL(e.target.files[0]);
// });

console.log(inpFile);
console.log(previewImg);
```

### alt attr

- обязательный атрибут, название картинки, будет отображено, если каритинка не прогрузилась, или была ошибка в src, или пользователь использует screen reader

### data attr

- позволяют хранить какую-то информацию об элементе помимо основных аттрибутов
- например, полезен при фильтрации

### DOCTYPE

- информация для браузера, какую версию ожидать

### Cookies

- JavaScript позволяет обращаться к кукам в браузере. Это автоматически означает, что если злоумышленнику удастся разместить произвольный код на странице сайта, то он сможет прочитать куку с данными аутентификации и передать её злоумышленнику. Так легко и беззаботно уводятся сессии и пользователи внезапно оказываются без своего аккаунта. Ни антивирус, ни фаервол в такой ситуации ничем помочь не смогут.

### script tag async / defer

- async - скрипт выполнится как только загрузится
- defer - срипт выполнится как только документ будет отпарсен

### inline styles

- опасны, потому что не могут быть перезаписаны с помощью подключенного файла css

### Node Children and Ancestors

- Дочерними (по отношению к узлу) являются только те узлы, которые непосредственно в нём лежат (находятся на "первом уровне вложенности").
- Потомками (по отношению к узлу) являются все вложенные в него узлы (находящиеся на "всех уровнях вложенности")

### HTML attributes

- Атрибут — всегда строка, а свойство — не всегда.
- Атрибуты не чувствительны к регистру

### children / childNodes

- children (only child ELEMENTS)
- childNodes (all nodes and elements)
- Между children (только Elements) и childNodes (Elements and other Nodes) есть еще одно довольно важное отличие. Они возвращают не только разный набор узлов, но и сам тип коллекции в первом и втором случае разный. childNodes возвращает NodeList, а children – HTMLCollection

### DOM selector

- селектор — это правило, позволяющее описать набор элементов в DOM-дереве.

### document.getElementById()

- Так как id в соответствии со спецификацией обязан быть уникальным на странице, то и метод getElementById() всегда возвращает один элемент. С другой стороны, по случайности в HTML может оказаться несколько тегов с одним id. В такой ситуации браузер вернёт первый встреченный элемент.

### !important

- увеличивает приоритет стилей до пред максимального (максимальный - inline styles)

### BEM / block element modifier

- block - что? меню, навбар (независимость)
- element - что ЭТО? составная часть блока, не может быть использована без него
- modifier - какой? определяет внешность блока/элемента

### Mutation

- there is a school of thought that mutation is best contained to a very narrow layer of the application
- The downside is taht you would likely write more boilerplate code to 'pass things around'. But the benefit, according to that philosophy, is that your program's behavior will become more predictable

### DOM

- Что такое DOM-дерево и зачем оно нужно для формирования страницы, когда у нас есть HTML? Дело в том, что HTML это просто текст. Его крайне неудобно использовать напрямую (скорее даже невозможно в данном случае). Гораздо проще создать на его базе объект, который будет соответствовать структуре самого HTML. Затем использовать его для формирования страницы. Именно этим объектом и является DOM-дерево.

- (Document Object Model) — это не зависящий от платформы и языка формат, позволяющий программам и скриптам получить доступ к содержимому HTML-документов, а также изменять их содержимое, структуру и оформление.

- даже если сам HTML будет правильным, браузер при создании DOM-дерева добавляет в него узлы, представленные тегами в html, которые вы, возможно, пропустили, но стандарт требует их наличия. Например, в таблицы добавляется <tbody> и не важно был он в исходном HTML или нет.

### Query string parametes / Get parameters / POST parameters

- Параметры query string не имеют никаког отношения к GET запросам, хотя многие разработчики называют из гет параметрами.
- На собеседованиях иногда задают вопрос: "Можно ли одновременно отправить POST и GET параметры"?
- Конечно можно, никакой связи между ними нет
- В некоторых языках существуют способы получения этих данных отдельно друг от друга

### Data attribute

- Для работы с произвольными свойствами в html зарезервирован специальный атрибут data-\*, где на месте звездочки может стоять любое слово.
- Такие атрибуты активно используются в JavaScript плагинах и позволяют не завязываться на классы. В элементах DOM они доступны через специальное свойство dataset

### Browser High-level structure / The components of the browsers

- User interface: The user interface includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
- Browser engine: The browser engine marshals actions between the UI and the rendering engine.
- Rendering engine: The rendering engine is responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
- Networking: The networking handles network calls such as HTTP requests, using different implementations for different platforms behind a platform-independent interface.
- UI backend: The UI backend is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. Underneath it uses operating system user interface methods.
- JavaScript engine: The JavaScript engine is used to parse and execute JavaScript code.
- Data storage: The data storage is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

### HTML parsing

- The rendering engine starts getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.
- The primary job of the HTML parser is to parse the HTML markup into a parse tree.
- The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript. The root of the tree is the "Document" object. Prior to any manipulation via scripting, the DOM has an almost one-to-one relation to the markup.

### HTML parsing algorithm

HTML cannot be parsed using the regular top-down or bottom-up parsers. The reasons are:

- The forgiving nature of the language.
- The fact that browsers have traditional error tolerance to support well known cases of invalid HTML.
- The parsing process is reentrant. For other languages, the source doesn't change during parsing, but in HTML, dynamic code (such as script elements containing document.write() calls) can add extra tokens, so the parsing process actually modifies the input.

The algorithm consists of two stages: tokenization and tree construction.

- Actions when the parsing is finished.
- The browser begins fetching external resources linked to the page (CSS, images, JavaScript files, etc.).
  At this stage the browser marks the document as interactive and starts parsing scripts that are in "deferred" mode: those that should be executed after the document is parsed. The document state is set to "complete" and a "load" event is fired.
  Note there is never an "Invalid Syntax" error on an HTML page. Browsers fix any invalid content and go on.

### CSS interpretation

- Parse CSS files, <style> tag contents, and style attribute values using "CSS lexical and syntax grammar"
- Each CSS file is parsed into a StyleSheet object, where each object contains CSS rules with selectors and objects corresponding CSS grammar.
- A CSS parser can be top-down or bottom-up when a specific parser generator is used.

### Page rendering

- Create a 'Frame Tree' or 'Render Tree' by traversing the DOM nodes, and calculating the CSS style values for each node.
- Calculate the preferred width of each node in the 'Frame Tree' bottom-up by summing the preferred width of the child nodes and the node's horizontal margins, borders, and padding.
- Calculate the actual width of each node top-down by allocating each node's available width to its children.
- Calculate the height of each node bottom-up by applying text wrapping and summing the child node heights and the node's margins, borders, and padding.
- Calculate the coordinates of each node using the information calculated above.
- More complicated steps are taken when elements are floated, positioned absolutely or relatively, or other complex features are used.
- Create layers to describe which parts of the page can be animated as a group without being re-rasterized. Each frame/render object is assigned to a layer.
- Textures are allocated for each layer of the page.
- The frame/render objects for each layer are traversed and drawing commands are executed for their respective layer. This may be rasterized by the CPU or drawn on the GPU directly using D2D/SkiaGL.
- All of the above steps may reuse calculated values from the last time the webpage was rendered, so that incremental changes require less work.
- The page layers are sent to the compositing process where they are combined with layers for other visible content like the browser chrome, iframes and addon panels.
- Final layer positions are computed and the composite commands are issued via Direct3D/OpenGL. The GPU command buffer(s) are flushed to the GPU for asynchronous rendering and the frame is sent to the window server.

### Microtasks queue

Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term).
As stated in the specification:

- The queue is first-in-first-out: tasks enqueued first are run first.
- Execution of a task is initiated only when nothing else is running.

- Promise handling is always asynchronous, as all promise actions pass through the internal “promise jobs” queue, also called “microtask queue” (V8 term).

### Misc

- we can change global var (if not const) in the scope of the function
- if we pass an argument to the function by value (primitives), we pass the copy of that var.
- parentNode of html element is the document itself (node, not element)

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

- JavaScript properties that begin with a digit cannot be referenced with dot notation and must be accessed using bracket notation.
- ECMAScript. Это большой и серьезный документ, описывающий устройство языка и поведение во всех возможных ситуациях.
- В console.log() встроено одно ограничение, если в объекте есть другие объекты на глубине больше второго уровня вложенности, то при выводе такого объекта на экран вместо объектов отобразится строка [Object], а вместо массива [Array]
- Что происходит, когда обычная ошибка не перехвачена try..catch? Скрипт умирает с сообщением в консоли.
