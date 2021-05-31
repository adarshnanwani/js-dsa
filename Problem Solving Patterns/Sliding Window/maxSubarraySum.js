const maxSubarraySum = (arr, count) => {
    if (arr.length <= 0) {
        return 0;
    }
    let max = -Infinity;
    let temp = 0;
    for (let j = 0; j < count; j++) {
        temp += arr[j];
    }
    if (temp > max) {
        max = temp;
    }
    for (let i = count; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - count];
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
