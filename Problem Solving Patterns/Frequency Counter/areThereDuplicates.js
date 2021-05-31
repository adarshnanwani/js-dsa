// This could also be done by Multiple Pointers
// Need to try that

const areThereDuplicates = (...args) => {
    const mapObj = {};
    for (let i = 0; i < args.length; i++) {
        if (mapObj[args[i]]) {
            return true;
        } else {
            mapObj[args[i]] = 1;
        }
    }
    return false;
};

console.log(areThereDuplicates(1, 2, 3, 2));
