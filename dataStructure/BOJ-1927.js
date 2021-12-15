// https://www.acmicpc.net/problem/1927

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

const minHeap = new PriorityQueue((a, b) => a - b);
let output = '';

const main = () => {
  let inputCnt = 0;

  rl.on('line', (line) => {
    const input = parseInt(line);
    if (inputCnt === 0) {
      T = input;
    } else {
      solution(input);
    }
    inputCnt++;
    if (inputCnt === T + 1) {
      rl.close();
    }
  }).on('close', () => {
    console.log(output);
    process.exit();
  });
};

const solution = (input) => {
  switch (input) {
    case 0:
      if (minHeap.isEmpty()) {
        output += '0\n';
      } else {
        output += `${minHeap.delete()}\n`;
      }
      break;
    default:
      minHeap.insert(input);
      break;
  }
};

main();
