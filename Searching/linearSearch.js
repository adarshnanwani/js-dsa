const linearSearch = (arr, val) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }
  return index;
};

console.log(linearSearch([1, 2, 44, 5, 6, 7], 44));
