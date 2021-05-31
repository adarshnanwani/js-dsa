const getPointer = (left, right) => {
    return Math.floor((left + right) / 2);
};

const binarySearch = (arr, num) => {
    if (arr.length <= 0) return -1;

    let left = 0;
    let right = arr.length - 1;
    let pointer = getPointer(left, right);

    while (left <= right) {
        if (arr[pointer] === num) {
            return pointer;
        } else if (arr[pointer] < num) {
            left = pointer + 1;
        } else {
            right = pointer - 1;
        }
        pointer = getPointer(left, right);
    }
    return -1;
};
console.log(binarySearch([1, 2, 5, 7, 8, 12, 55, 67], 67));
