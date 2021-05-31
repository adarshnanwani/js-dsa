const countUniqueValues = (arr) => {
    if (arr.length <= 0) {
        return 0;
    }
    let pointer = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[pointer] !== arr[i]) {
            pointer++;
            arr[pointer] = arr[i];
        }
    }
    return pointer + 1;
};

// console.log(
//   countUniqueValues([2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7, 7, 9, 21, 21, 22, 43])
// );
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
