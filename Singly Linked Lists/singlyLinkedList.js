class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      const tailNode = this.tail;
      this.tail = newNode;
      tailNode.next = this.tail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    let current = this.head;
    let pre;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    return current.val;
  }

  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    const currentHead = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return currentHead.val;
  }
  unShift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }
    return current.val;
  }
  set(index, val) {
    if (index >= this.length || index < 0) return false;
    let current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }
    current.val = val;
    return true;
  }
  insert(index, val) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return Boolean(this.unShift(val));
    else {
      let current = this.head;
      let pre;
      while (index > 0) {
        pre = current;
        current = current.next;
        index--;
      }
      const newNode = new Node(val);
      pre.next = newNode;
      newNode.next = current;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let current = this.head;
    let pre;
    while (index > 0) {
      pre = current;
      current = current.next;
      index--;
    }
    pre.next = current.next;
    this.length--;
    return current.val;
  }
  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push('hi'));
console.log(list.push('you'));
console.log(list.push('sir'));
console.log(list.push('there'));
console.log(list.reverse());
console.log(list);
// console.log(list.push(99));
// console.log(list.push('this'));
