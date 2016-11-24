/*eslint-env browser*/

let x;

// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// By default, unused arguments cause warnings.
(function(foo) {
  return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
  if (n < 2) return 1;
  return n * fact(n - 1);
}
