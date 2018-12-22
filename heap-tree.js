class HeapTree {

    constructor() {
        this.f = function (x, y) {
            return x - y
        };
        this.n = 0;
        this.heap = [0xbeef];
    }

    set comparator(f) {
        this.f = f;
    }

    get peek() {
        return this.heap[1];
    }

    get empty() {
        return (this.n === 0);
    }

    get takeLast() {
        if (this.empty)
            return null;
        return this.heap[this.n--];
    }

    get toStringSimple() {
        if (this.empty)
            return "";
        let s = "";
        //Level
        for (let l = 0; l <= this.depth; l++) {
            s += l + ":";
            let pairSecond = false;
            //Element
            for (let e = 0; e < Math.pow(2, l); e++) {
                let x = this.heap[Math.pow(2, l) + e];
                if (!x)
                    return s;
                else if (pairSecond)
                    s += x + "| ";
                else
                    s += x + " ";
                pairSecond = !pairSecond;
            }
            s += "\n";
        }
        return s;
    }

    static leftN(n) {
        return 2 * n;
    }

    static rightN(n) {
        return 2 * n + 1;
    }

    static parentN(n) {
        return Math.trunc(n / 2);
    }

    bubbleDown(x) {
        let root = this.heap[x];
        let leftN = HeapTree.leftN(x);
        if (leftN <= this.n) {
            let left = this.heap[leftN];
            let rightN = HeapTree.rightN(x);
            let right = this.heap[rightN];
            if (this.f(left, root) > 0) {
                if (rightN <= this.n && this.f(right, left) > 0) {
                    this.heap[x] = this.heap[rightN];
                    this.heap[rightN] = root;
                    this.bubbleDown(rightN);
                } else {
                    this.heap[x] = left;
                    this.heap[leftN] = root;
                    this.bubbleDown(leftN);
                }
            } else if (rightN <= this.n && this.f(right, root) > 0) {
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
        if (this.f(child, parent) > 0) {
            this.heap[parentN] = child;
            this.heap[x] = parent;
            this.bubbleUp(parentN);
        }
    }

    insert(element) {
        this.heap[++this.n] = element;
        this.bubbleUp(this.n);
    }

    get depth() {
        return Math.trunc(Math.log2(this.n));
    }

    get remove() {
        if (this.empty)
            return null;
        let x = this.heap[1];
        let last = this.takeLast;
        if (last) {
            this.heap[1] = last;
            this.bubbleDown(1);
        }
        return x;
    }
}
