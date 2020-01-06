class Heap {
  constructor(ary) {
    this.items = ary;
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.percolateDown(i)
    }
  }

  deleteMin() {
    let res = this.getMin();
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.percolateDown(0);
    return res
  }

  getMin() {
    return this.items[0]
  }

  percolateDown(index) {
    let child, cur = this.items[index];
    for (; index * 2 <= this.items.length; index = child) {
      child = 2 * index + 1;
      if (this.items[child] < this.items[child + 1]) {
        child++;
      }
      if (this.items[child] < cur) {
        this.items[index] = this.items[child];
      } else break;
    }
    this.items[index] = cur;
  }

  insert(item) {
    let index = this.items.length;
    this.items[index] = item;
    let parent;
    while ((parent = Math.floor((index - 1) / 2)) >= 0) {
      if (this.items[parent] > this.items[index]) {
        let temp = this.items[parent];
        this.items[parent] = this.items[index];
        this.items[index] = temp;
      }
      index = parent;
    }
  }
}

const a = new Heap([13, 21, 16, 24, 31, 19, 68, 65, 26, 32]);
console.log(a);
a.insert(12);
console.log(a);
