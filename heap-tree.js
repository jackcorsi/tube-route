class HeapTree {
    n = 0;
    heap = [0xbeef];
    f = function(x, y) {return x - y};

    set comparator(f) {
        this.f = f;
    }

    peek() {
        return this.heap[1];
    }

    get empty() {
        return (this.n === 0);
    }

    get takeLast() {
        if (this.empty())
            return null;
        return this.heap[this.n--];
    }

    static leftN(n) {
        return 2*n;
    }

    static rightN(n) {
        return 2*n + 1;
    }

    static parentN(n) {
        return n/2;
    }

    bubbleDown(x) {
        let root = this.heap[x];
        let leftN = HeapTree.leftN(x);
        let left = this.heap[leftN];
        if (left) {
            let rightN = HeapTree.rightN(x);
            let right = this.heap[rightN];
            if (this.f(left, root)) {
                if (right && this.f(right, left)) {
                    this.heap[x] = right;
                    this.heap[rightN] = root;
                    this.bubbleDown(rightN);
                } else {
                    this.heap[x] = left;
                    this.heap[leftN] = root;
                    this.bubbleDown(leftN);
                }
            } else if (right && this.f(right, root)) {
                this.heap[x] = right;
                this.heap[rightN] = root;
                this.bubbleDown(rightN);
            }
        }
    }

    bubbleUp(x) {
        let parentN = HeapTree.parentN(x);
        if (parentN === 0) //Base case top of tree
            return;
        let child = this.heap[x];
        let parent = this.heap[parentN];
        if (this.f(child, parent)) {
            this.heap[parentN] = child;
            this.heap[x] = parent;
            this.bubbleUp(parentN);
        }
    }

    insert(element) {
        this.heap[++this.n] = element;
        this.bubbleUp(this.n);
    }

    get remove() {
        if (this.empty())
            return null;
        let x = this.heap[1];
        let last = this.takeLast();
        if (last) {
            this.heap[1] = last;
            this.bubbleDown(1);
        }
        return x;
    }
}

