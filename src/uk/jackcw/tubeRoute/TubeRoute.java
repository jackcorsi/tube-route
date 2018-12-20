package uk.jackcw.tubeRoute;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Scanner;

public class TubeRoute {

    private static final int LINE_CHANGE_COST = 1;

    private static BufferedReader data_js = new BufferedReader(
            new InputStreamReader(TubeRoute.class.getResourceAsStream("/data.js")));
    private static ArrayList <String> lines = new ArrayList<>();
    private static ArrayList <Node> nodes = new ArrayList<>();

    public static void main(String[] args) {
        System.out.println("Initialising...");
        if (!fillMapData(lines, nodes)) {
            System.err.println("Internal error - failed to load map data!");
            return;
        }
        Scanner in = new Scanner(System.in);
        System.out.print("Start: ");
        String startString = in.nextLine().toLowerCase();
        Node start = null;
        Node dest = null;
        for (Node n: nodes) {
            if (n.getName().toLowerCase().contains(startString)) {
                start = n;
                break;
            }
        }
        if (start == null) {
            System.out.println("station not found");
            return;
        }

        System.out.print("Destination: ");
        String destString = in.nextLine().toLowerCase();

        for (Node n: nodes) {
            if (n.getName().toLowerCase().contains(destString)) {
                dest = n;
                break;
            }
        }
        if (dest == null) {
            System.out.println("station not found");
            return;
        }

        System.out.println("--- " + start.getName() + " TO " + dest.getName() + " ---");

        PriorityQueue<SearchNode> queue = new PriorityQueue<SearchNode>();
        SearchNode lastRouteNode = null;
        int expansions = 0;
        start.setFastest(0); //Prevent backtracking through the start node
        queue.add(new SearchNode(start));
        while (true) {
            SearchNode n = queue.poll();
            if (n == null)
                break;
//            if (n.getParent() != null)
//                System.out.println(n.getParent().getMapNode().getName() + "--[" + n.getLine() + "]-->" + n.getMapNode().getName());
            //Expand n
            expansions++;
            if (n.getMapNode() == dest) { //Terminating condition
                lastRouteNode = n;
                break;
            }
            Node.Edge[] edges = n.getMapNode().getEdges();
            for (Node.Edge e: edges) {
                int cost = (n.getLine() == e.line) ? n.getCost() + 1 : n.getCost() + 1 + LINE_CHANGE_COST;
                //If they're the same cost, they must be on different lines to be unique
                if (e.node.getFastest() > cost || e.node.getFastest() == cost && e.line != e.node.getFastestLine()) {
                    queue.add(new SearchNode(e.node, e.line, n, cost));
                    e.node.setFastest(cost);
                    e.node.setFastestLine(e.line);
                }
            }
        }

        if (lastRouteNode == null) {
            System.err.println("ERROR: no route found!");
        } else {
            // - LINE_CHANGE_COST accounts for initial penalty as we don't start the search on a line
            System.out.println("--- RESULT - Cost: " + (lastRouteNode.getCost() - LINE_CHANGE_COST)
                    + " IN " + expansions + " EXPANSIONS");
            String line = null;
            while (lastRouteNode.getParent() != null) {
                if (lastRouteNode.getLine() != line) {
                    System.out.println("CHANGE TO " + line);
                    line = lastRouteNode.getLine();
                }
                System.out.println("-->" + lastRouteNode.getMapNode().getName());
                lastRouteNode = lastRouteNode.getParent();
            }
        }
    }

    private static boolean fillMapData(ArrayList <String> lines, ArrayList <Node> nodes) {
        Context jsContext = Context.enter();
        Scriptable jsScope = jsContext.initStandardObjects();
        String data_js_script = collectAllLines(data_js);
        jsContext.evaluateString(jsScope, data_js_script, "<cmd>", 1, null);
        try {
            Object validateArrayFlag_obj = jsScope.get("_EMBED_VALIDATE_ARRAY_IDS", jsScope);
            assert (boolean) validateArrayFlag_obj : "Map data error";
            NativeArray jsLines = (NativeArray) jsScope.get("lines", jsScope);
            for (Object obj_line: jsLines) {
                NativeObject line = (NativeObject) obj_line;
                lines.add((String) line.get("name", jsScope));
            }

            NativeArray jsNodes = (NativeArray) jsScope.get("nodes", jsScope);
            for (Object obj_node: jsNodes) {
                NativeObject node = (NativeObject) obj_node;
                nodes.add(new Node((String) node.get("name", jsScope)));
            }
            for (int i = 0; i < nodes.size(); i++) {
                ArrayList<Node.Edge> edges = new ArrayList<Node.Edge>();
                NativeObject jsNode = (NativeObject) jsNodes.get(i);
                NativeArray jsEdges = (NativeArray) jsNode.get("edges", jsScope);
                for (Object obj_edge: jsEdges) {
                    NativeObject jsEdge = (NativeObject) obj_edge;
                    Number nId = (Number) jsEdge.get("nId", jsScope);
                    Number lineId = (Number) jsEdge.get("lineId", jsScope);
                    Node.Edge edge = new Node.Edge();
                    edge.node = nodes.get(nId.intValue());
                    edge.line = lines.get(lineId.intValue());
                    edges.add(edge);
                }
                nodes.get(i).setEdges(edges.toArray(new Node.Edge[0]));
            }

            return true;
        } catch (ClassCastException e) {
            return false;
        }
    }

    private static String collectAllLines(BufferedReader r) {
        try {
            StringBuilder b = new StringBuilder();
            String line;
            while ((line = r.readLine()) != null) {
                b.append(line);
                b.append('\n');
            }
            return b.toString();
        } catch (IOException e) {
            return null;
        }
    }
}
