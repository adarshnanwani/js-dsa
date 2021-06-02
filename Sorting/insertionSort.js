const insertionSort = (arr) => {
  let sortedArr = [];
  sortedArr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let insertAt = 0;
    for (let j = sortedArr.length - 1; j >= 0; j--) {
      if (currentValue > sortedArr[j]) {
        insertAt = j + 1;
        break;
      }
      insertAt = j;
    }
    sortedArr.splice(insertAt, 0, currentValue);
  }
  return sortedArr;
};

// console.log(insertionSort([55, 3, 33, 22, 33, 88, 6, 3, 17])); // random
// console.log(insertionSort([3, 4, 55, 44, 45, 75, 65])); // almost sorted

const insertionSortV2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentVal <= arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      } else break;
    }
  }
  return arr;
};

console.log(insertionSortV2([55, 3, 33, 22, 33, 88, 6, 3, 17])); // random
console.log(insertionSortV2([3, 4, 55, 44, 45, 75, 65])); // almost sorted
