class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
      return poppedNode;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    poppedNode.prev = null;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this.pop();
    const oldHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index > Math.floor(this.length / 2)) {
      let counter = this.length - index;
      let current = this.tail;
      while (counter > 1) {
        current = current.prev;
        counter--;
      }
      return current;
    } else {
      // start from head
      let current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
      return current;
    }
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    const node = this.get(index);
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.unShift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const node = this.get(index);
    const newNode = new Node(val);
    const prev = node.prev;
    prev.next = newNode;
    node.prev = newNode;
    newNode.next = node;
    newNode.prev = prev;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    const nodeToRemove = this.get(index);
    const prev = nodeToRemove.prev;
    const next = nodeToRemove.next;
    prev.next = next;
    next.prev = prev;
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.set(-1);
console.log(list.get(0));
console.log(list.get(9));
