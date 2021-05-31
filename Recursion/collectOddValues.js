// With helper method recursion
const collectOddValuesWithHelperMethod = (arr) => {
  const oddArr = [];

  const helperMethod = (arr) => {
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) {
      oddArr.push(arr[0]);
    }

    helperMethod(arr.slice(1));
  };

  helperMethod(arr);

  return oddArr;
};

console.log(
  'collectOddValuesWithHelperMethod([1,2,3,4,7,8,9,11])',
  collectOddValuesWithHelperMethod([1, 2, 3, 4, 7, 8, 9, 11])
);

// With pure recursion
const collectOddValuesWithPureRecursion = (arr) => {
  const oddArr = [];

  if (arr.length === 0) return oddArr;

  if (arr[0] % 2 !== 0) oddArr.push(arr[0]);

  return [...oddArr, ...collectOddValuesWithPureRecursion(arr.slice(1))];
};

console.log(
  'collectOddValuesWithPureRecursion([1,2,3,4,7,8,9,11])',
  collectOddValuesWithPureRecursion([1, 2, 3, 4, 7, 8, 9, 11])
);
