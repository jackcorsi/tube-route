const LINE_CHANGE_COST = 1;

class SearchNode {
    constructor(mapNode, line, parent, cost) {
        this.mapNode = mapNode;
        this.line = line;
        this.parent = parent;
        this.cost = cost;
    }

    //Ranks for n1 is lower
    static compare(n1, n2) {
        return n2.cost - n1.cost;
    }
}

//convert nId and lineId to references
for (let i = 0; i < nodes.length; i++) {
    let edges = nodes[i].edges;
    for (let j = 0; j < edges.length; j++) {
        let e = edges[j];
        e.node = nodes[e.nId];
        e.line = lines[e.lineId];
    }
}

//Return {lastRouteNode, numberOfExpansions}
function runSearch(start, dest) {
    for (let i = 0; i < nodes.length; i++) //Initialise fastest
        nodes[i].fastest = Number.MAX_VALUE;

    let expansions = 0;
    let queue = new HeapTree();
    queue.comparator = SearchNode.compare;
    start.fastest = 0;
    queue.insert(new SearchNode(start, null, null, 0));

    while (true) {
        let n = queue.remove;
        if (n === null)
            return {lastRouteNode: null, numberOfExpansions: expansions};

        //Expand n
        expansions++;
        if (n.mapNode === dest) { //Terminating condition
            return {lastRouteNode: n, numberOfExpansions: expansions};
        }
        let edges = n.mapNode.edges;
        for (let i = 0; i < edges.length; i++) {
            let e = edges[i];
            let cost = (n.line === e.line) ? n.cost + 1 : n.cost + 1 + LINE_CHANGE_COST;
            //If they're the same cost, they must be on different lines to be unique
            if (e.node.fastest > cost || e.node.fastest === cost && e.line !== e.node.fastestLine) {
                queue.insert(new SearchNode(e.node, e.line, n, cost));
                e.node.fastest = cost;
                e.node.fastestLine = e.line;
            }
        }

    }
}