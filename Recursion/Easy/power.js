const power = (b, a) => {
  if (a === 0) return 1;
  if (a === 1) return b;
  return b * power(b, a - 1);
};

console.log('power(2,2)', power(2, 2));
console.log('power(2,4)', power(2, 4));
