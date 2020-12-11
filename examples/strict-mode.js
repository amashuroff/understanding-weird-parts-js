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
