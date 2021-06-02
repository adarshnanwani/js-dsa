const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapCount = 0;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
        swapCount++;
      }
    }
    if (swapCount === 0) return arr;
  }
  return arr;
};

console.log(bubbleSort([55, 3, 33, 22, 33, 88, 6, 17])); // random
console.log(bubbleSort([3, 4, 55, 44, 45, 75, 65])); // almost sorted
