let foo = [];

for (let i = 0; i < 10; i++) {
  foo[i] = function () {
    return i;
  };
}

console.log(foo[0]());
