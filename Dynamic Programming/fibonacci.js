// Memoization with Top-Down Approach
const fibonacci = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  return result;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(100));
// console.log(fibonacci(10000)); // --> This won't work. Stack will overflow

// Tabulation with Bottom-Up Approach
const fib = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(100));
console.log(fib(10000)); // --> This won't break. Will return Infinity

/*
    Time complexity - O(n) for both
    Space Complexity is worse for memoized version
*/
