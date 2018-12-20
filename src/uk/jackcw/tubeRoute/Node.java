package uk.jackcw.tubeRoute;

public class Node {

    public String getFastestLine() {
        return fastestLine;
    }

    public void setFastestLine(String fastestLine) {
        this.fastestLine = fastestLine;
    }

    public static class Edge {
        public Node node;
        public String line;
    }

    private int fastest = Integer.MAX_VALUE;
    private String fastestLine;
    private String name;
    private Edge[] edges;

    public Node(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setEdges(Edge[] edges) {
        this.edges = edges;
    }

    public Edge[] getEdges() {
        return edges;
    }

    public long getFastest() {
        return fastest;
    }

    public void setFastest(int fastest) {
        this.fastest = fastest;
    }
}
