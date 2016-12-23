/* eslint-env browser*/

const x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
  // ...
}.bind(this));

(function(foo) {
  return foo;
})();

const myFunc = setTimeout(function() {
  // myFunc is considered used
  myFunc();
}, 50);
