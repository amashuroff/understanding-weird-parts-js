# Understand the language, don't imitate.

- код, который заставляет думать: неговорящие имена, плохие абстракции, неправильные структуры данных, сильная зависимость от контекста — плохой код.

---

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
- Лексическая область видимости (Lexical scoping) — это конкретный механизм, одно из правил для области видимости. Этот механизм применяется в JavaScript и большинстве других языков. Под лексической областью видимости можно понимать просто механизм поиска значений: смотрим в текущей области, если нет — идём на уровень выше, и так далее. Слово «лексический» означает, что видимость задаётся исключительно текстом программы, исходным кодом..

### Closures

- Замыкания используют окружение (environment) - это область памяти, где записываются идентификаторы и значения из областей видимости. Не путайте с окружением, как средой исполнения.

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

### Symbols

- New as of ES6, an additional primitive value type has been added, called "Symbol". Symbols are special "unique" (not strictly guaranteed!) values that can be used as properties on objects with little fear of any collision. They're primarily designed for special built-in behaviors of ES6 constructs, but you can also define your own symbols.

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

- JavaScript properties that begin with a digit cannot be referenced with dot notation and must be accessed using bracket notation.
- ECMAScript. Это большой и серьезный документ, описывающий устройство языка и поведение во всех возможных ситуациях.
- В console.log() встроено одно ограничение, если в объекте есть другие объекты на глубине больше второго уровня вложенности, то при выводе такого объекта на экран вместо объектов отобразится строка [Object], а вместо массива [Array]
