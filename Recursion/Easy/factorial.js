const factorial = (num) => {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

// console.log('Factorial 4', factorial(4));
// console.log('Factorial 3', factorial(3));
// console.log('Factorial 12', factorial(12));
// console.log('Factorial 5', factorial(5));
