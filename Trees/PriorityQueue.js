function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority = 1) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length === 0) return this.values;

    function bubble(arr, currentIndex) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (arr[parentIndex] && arr[parentIndex].priority > priority) {
        [arr[parentIndex], arr[currentIndex]] = [
          arr[currentIndex],
          arr[parentIndex],
        ];
        bubble(arr, parentIndex);
      } else {
        return arr;
      }
    }
    bubble(this.values, this.values.length - 1);

    return this.values;
  }
  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    let oldRoot = this.values.pop();

    function bubbleDown(arr, currentIndex) {
      if (currentIndex > arr.length) return arr;
      const leftIndex = 2 * currentIndex + 1;
      const rightIndex = 2 * currentIndex + 2;
      let swapper = null;

      if (leftIndex < arr.length) {
        if (arr[leftIndex].priority < arr[currentIndex].priority)
          swapper = leftIndex;
      }

      if (rightIndex < arr.length) {
        if (
          (arr[rightIndex].priority < arr[leftIndex].priority &&
            swapper !== null) ||
          (arr[rightIndex].priority < arr[currentIndex].priority &&
            swapper === null)
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

const pq = new PriorityQueue();
console.log(pq.enqueue('Common cold', 5));
console.log(pq.enqueue('Gunshot wound', 1));
console.log(pq.enqueue('High fever', 4));
console.log(pq.enqueue('Broken Arm', 2));
console.log(pq.enqueue('Broken Leg', 2));
console.log(pq.enqueue('Broken hand', 2));
console.log(pq.enqueue('Concussion', 3));
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
