class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      const currentLast = this.last;
      currentLast.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    const currentFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentFirst.next;
    }
    this.size--;
    return currentFirst.val;
  }
}

const q = new Queue();
console.log(q.enqueue('First')); // 1
console.log(q.enqueue('Second')); // 2
console.log(q.enqueue('Third')); // 3
console.log(q.enqueue('Fourth')); // 4
console.log(q.dequeue()); // "First"
console.log(q.dequeue()); // "Second"
console.log(q.dequeue()); // "Third"
console.log(q.dequeue()); // "Fourth"
console.log(q.dequeue()); // null
