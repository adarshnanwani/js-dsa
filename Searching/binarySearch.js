const binarySearch = (sortedArr, val) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (sortedArr[middle] === val) return middle;
    else if (sortedArr[middle] < val) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
};

console.log(binarySearch([1, 2, 5, 6, 7, 44], 44));
