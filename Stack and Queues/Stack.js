class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) this.first = this.last = newNode;
    else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    const currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    return currentFirst.val;
  }
}

const stack = new Stack();
console.log(stack.push('First')); // 1
console.log(stack.push('Second')); // 2
console.log(stack.push('Third')); // 3
console.log(stack.pop()); // "Third"
console.log(stack.pop()); // "Second"
console.log(stack.pop()); // "First"
console.log(stack.pop()); // null
