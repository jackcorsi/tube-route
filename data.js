//Edges: {n1, line}

function Node(name) {
    this.name = name;
    this.edges = [];
}

function buildEdges(line, nodes) {
    for (let i = 0; i < nodes.length - 1; i++) {
        let node = nodes[i];
        let next = nodes[i+1];
        node.edges.append({n: next, line:line});
        next.edges.append({n: node, line: line});
    }
}

//Lines
const bakerloo = {      name: "Bakerloo",               colour: 0xb36305};
const central = {       name: "Central",                colour: 0xe32017};
const circle = {        name: "Circle",                 colour: 0xffd300};
const district = {      name: "District",               colour: 0x00782a};
const hAndC = {         name: "Hammersmith and City",   colour: 0xf3a9bb};
const jubilee = {       name: "Jubilee",                colour: 0xa0a5a9};
const metropolitan = {  name: "Metropolitan",           colour: 0x9b0056};
const northern = {      name: "Northern",               colour: 0x000000};
const piccadilly = {     name: "Piccadilly",            colour: 0x003688};
const victoria = {      name: "Victoria",               colour: 0x0098d4};
const wAndC = {         name: "Waterloo and City",      colour: 0x95cdba};
const dlr = {           name: "DLR",                    colour: 0x00a4a7};
const overground = {    name: "Overground",             colour: 0xee7c0e};
const tramlink = {      name: "Tramlink",               colour: 0x84b817};
const cableCar = {      name: "Cable Car",              colour: 0xe21836};
const crossrail = {     name: "Crossrail",              colour: 0x7156a5};
const walkableRoute = { name: "Walkable Route",         colour: 0x808080};

//Picadilly
uxbridge = new Node("Uxbridge");
hillingdon = new Node("Hillingdon");
ickenham = new Node("Ickenham");
ruislip = new Node("Ruislip");
ruislipManor = new Node("Ruislip Manor");
eastcote = new Node("Eastcote");
raynersLane = new Node("Rayners Lane");
southHarrow = new Node("South Harrow");
sudburyHill = new Node("Sudbury Hill");
sudburyTown = new Node("Sudbury Town");
alperton = new Node("Alperton");
parkRoyal = new Node("Park Royal");
northEaling = new Node("North Ealing");
ealingCommon = new Node("Ealing Common");
actonTown = new Node("Action Town");
hammersmith = new Node("Hammersmith");
baronsCourt = new Node("Barons Court");
earlsCourt = new Node("Earl's Court");
gloucesterRoad = new Node("Gloucester Road");
southKensington = new Node("South Kensington");
knightsbridge = new Node("Knightsbridge");
hydeParkCorner = new Node("Hyde Park Corner");
greenPark = new Node("Green Park");
piccadillyCircus = new Node("Piccadilly Circus");
leicesterSquare = new Node("Leicester square");
coventGarden = new Node("Covent Garden");
holborn = new Node("Holborn");
russellSquare = new Node("Russell Square");
kingsCrossStPancras = new Node("King's Cross St Pancras");
caledonianRoad = new Node("Caledonian Road");
hollowayRoad = new Node("Holloway Road");
arsenal = new Node("Arsenal");
finsburyPark = new Node("Finsubury Park");
manorHouse = new Node("Manor House");
turnpikeLane = new Node("Turnpike Lane");
woodGreen = new Node("Wood Green");
boundsGreen = new Node("Bounds Green");
arnosGrove = new Node("Arnos Grove");
southgate = new Node("Southgate");
oakwood = new Node("Oakwood");
cockfosters = new Node("Cockfosters");

buildEdges(piccadilly, [
    uxbridge,
    hillingdon,
    ickenham,
    ruislip,
    ruislipManor,
    eastcote,
    raynersLane,
    southHarrow,
    sudburyHill,
    sudburyTown,
    sudburyHill,
    sudburyTown,
    alperton,
    parkRoyal,
    northEaling,
    ealingCommon,
    actonTown,
    hammersmith,
    baronsCourt,
    earlsCourt,
    gloucesterRoad,
    southKensington,
    knightsbridge,
    hydeParkCorner,
    greenPark,
    piccadillyCircus,
    leicesterSquare,
    coventGarden,
    holborn,
    russellSquare,
    kingsCrossStPancras,
    caledonianRoad,
    hollowayRoad,
    arsenal,
    manorHouse,
    turnpikeLane,
    woodGreen,
    boundsGreen,
    arnosGrove,
    southgate,
    oakwood,
    cockfosters
]);

//metropolitan
westHarrow = new Node("West Harrow");
harrowOnTheHill = new Node("Harrow on the Hill");
northwickPark = new Node("Northwick Park");
prestonRoad = new Node("Preston Road");
wembleyPark = new Node("Wembley Park");
finchleyRoad = new Node("Finchley Road");
bakerStreet = new Node("Baker Street");
greatPortlandStreet = new Node("Great Portland Street");
eustonSquare = new Node("Euston Square");
farringdon = new Node("Farringdon");
barbican = new Node("Barbican");
moorgate = new Node("Moorgate");
liverpoolStreet = new Node("Liverpool Street");
aldgate = new Node("Aldgate");

buildEdges(metropolitan, [
   raynersLane,
   westHarrow,
   harrowOnTheHill,
   northwickPark,
   prestonRoad,
   wembleyPark,
   finchleyRoad,
   bakerStreet,
   greatPortlandStreet,
   eustonSquare,
   kingsCrossStPancras,
   farringdon,
   barbican,
   moorgate,
   liverpoolStreet,
   aldgate
]);

//Victoria
walthamstowCentral = new Node("Walthamstow Central");
blackhorseRoad = new Node("Blackhorse Road");
tottenhamHale = new Node("Tottenham Hale");
sevenSisters = new Node("Seven Sisters");
highburyAndIslington = new Node("Highbury and Islington");
euston = new Node("Euston");
warrenStreet = new Node("Warren Street");
oxfordCircus = new Node("Oxford Circus");
victoriaN = new Node("Victoria");
pimlico = new Node("Pimlico");
vauxhall = new Node("Vauxhall");
stockwell = new Node("Stockwell");
brixton = new Node("Brixton");

buildEdges(victoria, [
    walthamstowCentral,
    blackhorseRoad,
    tottenhamHale,
    sevenSisters,
    finsburyPark,
    highburyAndIslington,
    kingsCrossStPancras,
    euston,
    warrenStreet,
    oxfordCircus,
    greenPark,
    victoriaN,
    pimlico,
    vauxhall,
    stockwell,
    brixton
]);