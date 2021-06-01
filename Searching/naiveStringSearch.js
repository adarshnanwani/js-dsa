const naiveStringSearch = (str, search) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === search[0]) {
      let matches = 1;
      for (let j = 1; j < search.length; j++) {
        if (search[j] === str[i + j]) matches++;
        else break;
      }
      if (matches === search.length) count++;
      i = i + matches;
    }
  }

  return count;
};

console.log(naiveStringSearch('womlomgromgtteomgio', 'omg'));
console.log(naiveStringSearch('lorie loled', 'lol'));
