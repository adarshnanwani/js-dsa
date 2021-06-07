const getDigit = (num, place) => {
  let digit;
  while (num >= 0 && place >= 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    place--;
  }
  return digit;
};

// A better implementation with JS library methods
// const getDigit = (num, place) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// };

const digitCount = (num) => {
  let counter = 0;
  while (num > 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    counter++;
  }
  return counter;
};

const mostDigits = (numArr) => {
  let maxLength = digitCount(numArr[0]);
  for (let i = 1; i < numArr.length; i++) {
    currentDigitCount = digitCount(numArr[i]);
    if (currentDigitCount > maxLength) {
      maxLength = currentDigitCount;
    }
  }
  return maxLength;
};

// Older Solution
// const radixSort = (arr) => {
//   const maxDigits = mostDigits(arr);
//   let arr = arr.slice();
//   for (let place = 0; place < maxDigits; place++) {
//     const bucket = new Array(10);

//     for (let j = 0; j < arr.length; j++) {
//       const digit = getDigit(arr[j], place);
//       bucket[digit]
//         ? bucket[digit].push(arr[j])
//         : (bucket[digit] = [arr[j]]);
//     }
//     arr = bucket
//       .filter((i) => i.length > 0)
//       .join()
//       .split(',')
//       .map((item) => Number(item));
//   }
//   return tempArr;
// };

const radixSort = (numArr) => {
  const maxDigits = mostDigits(numArr);
  for (let place = 0; place < maxDigits; place++) {
    const bucket = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < numArr.length; j++) {
      const digit = getDigit(numArr[j], place);
      bucket[digit]
        ? bucket[digit].push(numArr[j])
        : (bucket[digit] = [numArr[j]]);
    }
    numArr = [].concat(...bucket);
  }
  return numArr;
};

console.log(
  radixSort([
    3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743,
    4127,
  ])
);
