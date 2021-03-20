// Check if the second array has squared of each item from the first array

const same = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (frequencyCounter1[arr1[i]]) {
            frequencyCounter1[arr1[i]] += 1;
        } else {
            frequencyCounter1[arr1[i]] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (frequencyCounter2[arr2[i]]) {
            frequencyCounter2[arr2[i]] += 1;
        } else {
            frequencyCounter2[arr2[i]] = 1;
        }
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] != frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
};

// const check = same([1, 2, 7, 3, 5, 1], [1, 49, 25, 1, 4, 9]);
// console.log(check);

// Check if two words are anagrams

const validAnagrams = (str1, str2) => {
    if (str1.length != str2.length) {
        return false;
    }
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (frequencyCounter1[arr1[i]]) {
            frequencyCounter1[arr1[i]] += 1;
        } else {
            frequencyCounter1[arr1[i]] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (frequencyCounter2[arr2[i]]) {
            frequencyCounter2[arr2[i]] += 1;
        } else {
            frequencyCounter2[arr2[i]] = 1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
};

console.log('anagram', 'nagaram', validAnagrams('anagram', 'nagaram'));
console.log('aaz', 'zza', validAnagrams('aaz', 'zza'));
console.log('awesome', 'awesom', validAnagrams('awesome', 'awesom'));
console.log('qwerty', 'qeywrt', validAnagrams('qwerty', 'qeywrt'));
