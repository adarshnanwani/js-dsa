class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keymap.length;
    }
    return total;
  }
  set(key, value) {
    const keyHash = this._hash(key);
    if (!this.keymap[keyHash]) {
      this.keymap[keyHash] = [];
    }
    // TO DO - Override if duplicate keys
    this.keymap[keyHash].push({ key, value });
  }

  get(key) {
    const keyHash = this._hash(key);
    if (!this.keymap[keyHash]) return undefined;
    const len = this.keymap[keyHash].length;
    if (len === 1) return this.keymap[keyHash][0].value;
    for (let i = 0; i < len; i++) {
      if (this.keymap[keyHash][i].key === key)
        return this.keymap[keyHash][i].value;
    }
    return undefined;
  }
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          if (!keysArr.includes(this.keymap[i][j].key))
            keysArr.push(this.keymap[i][j].key);
        }
      }
    }
    return keysArr;
  }
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          if (!valuesArr.includes(this.keymap[i][j].value))
            valuesArr.push(this.keymap[i][j].value);
        }
      }
    }
    return valuesArr;
  }
}
const colors = new HashTable();
colors.set('white', '#fff');
colors.set('black', '#000');
colors.set('green', '#325542');
colors.set('blue', '#325542');
colors.set('grey', '#ccc');
console.log(colors.keys());
console.log(colors.values());

/*
    Ways to avoid collision
    1. Separate Chaining
    2. Linear Probing
*/
