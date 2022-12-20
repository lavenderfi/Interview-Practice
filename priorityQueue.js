class Queue {
    constructor(comparator = ((a,b)=>a-b)){
        this.arr = []
        this.comparator = (one,two) => comparator(this.arr[one],this.arr[two])
    }

    add(val){
        this.arr.push(val)
        this.bubbleUp()
    }

    remove(index){
        if (!this.size) return null;
        this.swap(index, this.size - 1); 
        const value = this.arr.pop(); 
        this.bubbleDown(index);
        return value;
    }

    bubbleUp() {
        let index = this.size - 1;
        const parent = (i) => Math.ceil(i / 2) - 1;
        while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
          this.swap(parent(index), index);
          index = parent(index);
        }
      }
      bubbleDown(index) {
        let curr = index;
        const left = (i) => 2 * i + 1;
        const right = (i) => 2 * i + 2;
        const getTopChild = (i) => (right(i) < this.size
          && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));
    
        while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
          const next = getTopChild(curr);
          this.swap(curr, next);
          curr = next;
        }
      }

    swap(a, b) {
        [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
      }
    
}