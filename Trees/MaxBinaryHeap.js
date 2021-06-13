function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    if (this.values.length === 0) return this.values;
    function bubble(arr, currentIndex) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (val === 100) {
        console.log('currentIndex', currentIndex);
        console.log('parentIndex', parentIndex);
      }
      if (arr[parentIndex] < val) {
        [arr[currentIndex], arr[parentIndex]] = [
          arr[parentIndex],
          arr[currentIndex],
        ];
        bubble(arr, parentIndex);
      } else {
        return arr;
      }
    }
    bubble(this.values, this.values.length - 1);
    return this.values;
  }
  extractMax() {
    if (this.values.length === 0) {
      return undefined;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    // swap
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    // pop last
    let oldRoot = this.values.pop();
    // bubble down
    function bubbleDown(arr, currentIndex) {
      if (currentIndex > arr.length) return arr;
      const leftIndex = 2 * currentIndex + 1;
      const rightIndex = 2 * currentIndex + 2;
      let swapper = null;

      if (leftIndex < arr.length) {
        if (arr[leftIndex] > arr[currentIndex]) swapper = leftIndex;
      }

      if (rightIndex < arr.length) {
        if (
          (arr[rightIndex] > arr[leftIndex] && swapper !== null) ||
          (arr[rightIndex] > arr[currentIndex] && swapper === null)
        )
          swapper = rightIndex;
      }
      if (swapper === null) return arr;

      swap(arr, swapper, currentIndex);
      bubbleDown(arr, swapper);
    }
    bubbleDown(this.values, 0);
    return oldRoot;
  }
}

const mbh = new MaxBinaryHeap();
console.log(mbh.insert(41));
console.log(mbh.insert(39));
console.log(mbh.insert(33));
console.log(mbh.insert(18));
console.log(mbh.insert(27));
console.log(mbh.insert(12));
console.log(mbh.insert(55));
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
