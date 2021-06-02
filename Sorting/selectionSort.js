const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] >= arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

console.log(selectionSort([55, 3, 33, 22, 33, 88, 6, 17])); // random
console.log(selectionSort([3, 4, 55, 44, 45, 75, 65])); // almost sorted
