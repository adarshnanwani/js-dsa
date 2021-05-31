const averagePair = (arr, avg) => {
    if (arr.length === 0) return false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) / 2 === avg) {
                return true;
            } else if ((arr[i] + arr[j]) / 2 > avg) {
                break;
            }
        }
    }
    return false;
};

console.log(averagePair([1, 2, 3], 2.5));
