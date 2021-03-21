// 0 1 2 3 4 5 6 7
// 0 1 1 2 3 5 8 13
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n <= 1) { return n }
//   let a = b = 1, c = 0;
//   while (n-- > 0) {
//     a = b;
//     b = c;
//     c = (a + b) % 1000000007;
//   };
//   return c;
// }
console.log(fib(5));
// console.log(6.0000000000000000000003 % 1000000007);

// 方法2 递归
function fib(n) {
  if (n <= 2) { return 1 }
  return fib(n - 1) + fib(n - 2)
}
