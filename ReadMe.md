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

```function h1(strings) {
  return `<h1>${strings}</h1>`;
}

console.log(h1`alex`);
```
