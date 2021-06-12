class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverseAndInsert = (node, value, newNode) => {
  const isGreater = value > node.value;
  if (isGreater) {
    if (node.right) {
      traverseAndInsert(node.right);
    } else {
      node.right = newNode;
    }
  } else {
    if (node.left) {
      traverseAndInsert(node.left);
    } else {
      node.left = newNode;
    }
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current.left || current.right) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left.value === value) return true;
        current = current.left;
      } else if (value > current.value) {
        if (current.right.value === value) return true;
        current = current.right;
      }
    }
    return false;
  }
  BFS() {
    const queue = [];
    const visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  DFSPreOrder() {
    const visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  DFSPostOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
  DFSInOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst.DFSInOrder());

//                   10
//          6                15
//      3       8                  20
