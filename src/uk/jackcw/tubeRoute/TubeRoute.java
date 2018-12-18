package uk.jackcw.tubeRoute;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class TubeRoute {

    private static BufferedReader data_js = new BufferedReader(
            new InputStreamReader(TubeRoute.class.getResourceAsStream("/data.js")));

    public static void main(String[] args) {
        NativeArray result;
        Context jsContext = Context.enter();
        Scriptable jsScope = jsContext.initStandardObjects();
        String data_js_script = collectAllLines(data_js);
        jsContext.evaluateString(jsScope, data_js_script, "<cmd>", 1, null);
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
