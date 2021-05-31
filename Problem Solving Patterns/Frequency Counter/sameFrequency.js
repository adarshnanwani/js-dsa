function sameFrequency(num1, num2) {
    const num1Unique = {};
    const num2Unique = {};
    while (num1 > 0) {
        const rem = num1 % 10;
        if (num1Unique[rem]) {
            num1Unique[rem] += 1;
        } else {
            num1Unique[rem] = 1;
        }
        num1 = Math.floor(num1 / 10);
    }
    while (num2 > 0) {
        const rem = num2 % 10;
        if (num2Unique[rem]) {
            num2Unique[rem] += 1;
        } else {
            num2Unique[rem] = 1;
        }
        num2 = Math.floor(num2 / 10);
    }
    if (Object.keys(num1Unique).length !== Object.keys(num2Unique).length) {
        return false;
    }
    let result = true;
    for (let key of Object.keys(num1Unique)) {
        if (num1Unique[key] !== num2Unique[key]) {
            result = false;
            break;
        }
    }
    return result;
}

console.log(sameFrequency(22, 222));
