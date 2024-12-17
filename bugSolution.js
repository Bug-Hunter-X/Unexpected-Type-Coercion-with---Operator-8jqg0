function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  return a + b;
}
console.log(foo(1, "1")); // Output: 2

//Alternative solution using parseInt
function foo2(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "1")); // Output: 2