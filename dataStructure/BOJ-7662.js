// https://www.acmicpc.net/problem/7662

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare ?? ((a, b) => a - b);
  }
  insert(value) {
    this.heap.push(value);
    this.upHeap(this.heap.length - 1);
  }
  delete() {
    if (this.isEmpty()){
      return;
    }
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length != 0){
      this.heap[0] = last;
      this.downHeap(0);
    }
    return root;
  }
  downHeap(pos) {
    while (this.isInternal(pos)) {
      let s = null;
      if (!this.hasRight(pos)) {
        s = this.left(pos);
      } else if (this.compare(this.heap[this.left(pos)], this.heap[this.right(pos)]) <= 0){
        s = this.left(pos);
      } else {
        s = this.right(pos);
      }
      if (this.compare(this.heap[s], this.heap[pos]) < 0){
        this.swap(pos, s);
        pos = s;
      } else {
        break;
      }
    }
  }
  upHeap(pos) {
    while(!this.isRoot(pos)) {
      const parent = this.parent(pos);
      if (this.compare(this.heap[parent], this.heap[pos]) <= 0) {
        break;
      }
      this.swap(parent, pos);
      pos = parent;
    }
  }
  swap(pos1, pos2) {
    const tmp = this.heap[pos1];
    this.heap[pos1] = this.heap[pos2];
    this.heap[pos2] = tmp;
  }
  parent(pos) {
    return parseInt((pos - 1) / 2);
  }
  left(pos) {
    return 2 * pos + 1;
  }
  right(pos) {
    return 2 * pos + 2;
  }
  root() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  isInternal(pos) {
    return this.hasLeft(pos);
  }
  isRoot(pos) {
    return pos === 0;
  }
  hasLeft(pos) {
    return this.left(pos) < this.heap.length;
  }
  hasRight(pos) {
    return this.right(pos) < this.heap.length;
  }
}

let minHeap = new PriorityQueue((a, b) => a.priority - b.priority);
let maxHeap = new PriorityQueue((a, b) => b.priority - a.priority);
let check = [];

const main = () => {
  let testCnt = 0;
  let inputCnt = 0;
  let T = -1;
  let k = -1;
  let ptr = 0;
  rl.on('line', (line) => {
    if (T === -1) {
      T = parseInt(line);
    } else {
      if (k === -1) {
        k = parseInt(line);
      } else {
        const instArr = line.split(' ');
        const [operator, operand] = instArr;
        switch (operator) {
          case 'I':
            minHeap.insert({ priority: parseInt(operand), tag: parseInt(ptr) });
            maxHeap.insert({ priority: parseInt(operand), tag: parseInt(ptr) });
            check[ptr] = false;
            ptr++;
            break;
          case 'D':
            if (operand === '-1') {
              while (!minHeap.isEmpty() && check[minHeap.root().tag]) {
                minHeap.delete();
              }
              if (!minHeap.isEmpty()) {
                check[minHeap.root().tag] = true;
                minHeap.delete();
              }
            } else if (operand === '1') {
              while (!maxHeap.isEmpty() && check[maxHeap.root().tag]) {
                maxHeap.delete();
              }
              if (!maxHeap.isEmpty()) {
                check[maxHeap.root().tag] = true;
                maxHeap.delete();
              }
            }
            break;
          default:
            break;
        }
        inputCnt++;
      }
      if (inputCnt === k) {
        result();
        testCnt++;
        inputCnt = 0;
        k = -1;
        ptr = 0;
        minHeap = new PriorityQueue((a, b) => a.priority - b.priority);
        maxHeap = new PriorityQueue((a, b) => b.priority - a.priority);
        check = [];
      }
    }
    if (testCnt === T) {
      rl.close();
    }
  }).on('close', () => {
    process.exit();
  });
};

const result = () => {
  while (!minHeap.isEmpty() && check[minHeap.root().tag]) {
    minHeap.delete();
  }
  while (!maxHeap.isEmpty() && check[maxHeap.root().tag]) {
    maxHeap.delete();
  }
  if (minHeap.isEmpty() || maxHeap.isEmpty()) {
    console.log('EMPTY');
  } else {
    console.log(`${maxHeap.root().priority} ${minHeap.root().priority}`);
  }
};

main();
