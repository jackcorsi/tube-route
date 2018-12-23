let stationList = [];
for (let i = 0; i < nodes.length; i++)
    stationList.push(nodes[i]);
stationList = stationList.sort((x, y) => {return (x.name > y.name) ? 1 : -1}); //Sort stations alphabetically

for (let i = 0; i < nodes.length; i++) { //Fill station <select>s
    let st = stationList[i];
    let option = document.createElement("option");
    option.innerText = st.name;
    document.getElementById("select_start").appendChild(option);
    document.getElementById("select_dest").appendChild(option.cloneNode(true));
}

document.getElementById("button_go").onclick = function() {
  let startId = document.getElementById("select_start").selectedIndex;
  let destId = document.getElementById("select_dest").selectedIndex;
  let start = stationList[startId];
  let dest = stationList[destId];
  let searchResult = runSearch(start, dest);
  let p_result = document.getElementById("p_result");
  p_result.innerHTML = "";
  let n = searchResult.lastRouteNode;
  while (n) {
      p_result.innerHTML += n.mapNode.name + " VIA " + n.line.name + "<br>";
      n = n.parent;
  }
};