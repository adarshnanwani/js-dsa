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
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(12);
bst.insert(55);
//25;
//                 55
//         33             67
//     22      44
// 10              52
