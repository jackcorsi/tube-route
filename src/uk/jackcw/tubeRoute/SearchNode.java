package uk.jackcw.tubeRoute;

public class SearchNode implements Comparable <SearchNode> {

    private Node mapNode;
    private String line;
    private SearchNode parent;
    private int cost = 0;

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public SearchNode(Node n) {
        mapNode = n;
    }

    public SearchNode(Node mapNode, String line, SearchNode parent, int cost) {
        this.mapNode = mapNode;
        this.line = line;
        this.parent = parent;
        this.cost = cost;
    }

    public Node getMapNode() {
        return mapNode;
    }

    public void setMapNode(Node mapNode) {
        this.mapNode = mapNode;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public SearchNode getParent() {
        return parent;
    }

    public void setParent(SearchNode parent) {
        this.parent = parent;
    }

    @Override
    public int compareTo(SearchNode o) {
        return cost - o.getCost();
    }
}
