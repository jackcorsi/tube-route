//Edges: {n1, line}

function Node(id, name) {
    this.name = name;
    this.id = id;
    this.edges = [];
}

function buildEdges(line, nodes) {
    for (var i = 0; i < nodes.length - 1; i++) {
        var node = nodes[i];
        var next = nodes[i+1];
        node.edges.push({nId: next.id, lineId:line.id});
        next.edges.push({nId: node.id, lineId:line.id});
    }
}

//Lines
const bakerloo = {id: 0,        name: "Bakerloo",               colour: 0xb36305};
const central = {id: 1,         name: "Central",                colour: 0xe32017};
const circle = {id: 2,          name: "Circle",                 colour: 0xffd300};
const district = {id: 3,        name: "District",               colour: 0x00782a};
const hAndC = {id: 4,           name: "Hammersmith and City",   colour: 0xf3a9bb};
const jubilee = {id: 5,         name: "Jubilee",                colour: 0xa0a5a9};
const metropolitan = {id: 6,    name: "Metropolitan",           colour: 0x9b0056};
const northern = {id: 7,        name: "Northern",               colour: 0x000000};
const piccadilly = {id: 8,      name: "Piccadilly",             colour: 0x003688};
const victoria = {id: 9,        name: "Victoria",               colour: 0x0098d4};
const wAndC = {id: 10,          name: "Waterloo and City",      colour: 0x95cdba};
const dlr = {id: 11,            name: "DLR",                    colour: 0x00a4a7};
const overground = {id: 12,     name: "Overground",             colour: 0xee7c0e};
const tramlink = {id: 13,       name: "Tramlink",               colour: 0x84b817};
const cableCar = {id: 14,       name: "Cable Car",              colour: 0xe21836};
const crossrail = {id: 15,      name: "Crossrail",              colour: 0x7156a5};
const walkableRoute = {id: 16,  name: "Walkable Route",         colour: 0x808080};

lines = [
    bakerloo,
    central,
    circle,
    district,
    hAndC,
    jubilee,
    metropolitan,
    northern,
    piccadilly,
    victoria,
    wAndC,
    dlr,
    overground,
    tramlink,
    cableCar,
    crossrail,
    walkableRoute,
];

nodes = [];

//Picadilly
uxbridge = new Node(0, "Uxbridge");
hillingdon = new Node(1, "Hillingdon");
ickenham = new Node(2, "Ickenham");
ruislip = new Node(3, "Ruislip");
ruislipManor = new Node(4, "Ruislip Manor");
eastcote = new Node(5, "Eastcote");
raynersLane = new Node(6, "Rayners Lane");
southHarrow = new Node(7, "South Harrow");
sudburyHill = new Node(8, "Sudbury Hill");
sudburyTown = new Node(9, "Sudbury Town");
alperton = new Node(10, "Alperton");
parkRoyal = new Node(11, "Park Royal");
northEaling = new Node(12, "North Ealing");
ealingCommon = new Node(13, "Ealing Common");
actonTown = new Node(14, "Action Town");
hammersmith = new Node(15, "Hammersmith");
baronsCourt = new Node(16, "Barons Court");
earlsCourt = new Node(17, "Earl's Court");
gloucesterRoad = new Node(18, "Gloucester Road");
southKensington = new Node(19, "South Kensington");
knightsbridge = new Node(20, "Knightsbridge");
hydeParkCorner = new Node(21, "Hyde Park Corner");
greenPark = new Node(22, "Green Park");
piccadillyCircus = new Node(23, "Piccadilly Circus");
leicesterSquare = new Node(24, "Leicester square");
coventGarden = new Node(25, "Covent Garden");
holborn = new Node(26, "Holborn");
russellSquare = new Node(27, "Russell Square");
kingsCrossStPancras = new Node(28, "King's Cross St Pancras");
caledonianRoad = new Node(29, "Caledonian Road");
hollowayRoad = new Node(30, "Holloway Road");
arsenal = new Node(31, "Arsenal");
finsburyPark = new Node(32, "Finsubury Park");
manorHouse = new Node(33, "Manor House");
turnpikeLane = new Node(34, "Turnpike Lane");
woodGreen = new Node(35, "Wood Green");
boundsGreen = new Node(36, "Bounds Green");
arnosGrove = new Node(37, "Arnos Grove");
southgate = new Node(38, "Southgate");
oakwood = new Node(39, "Oakwood");
cockfosters = new Node(40, "Cockfosters");

nodes.concat([
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
    finsburyPark,
    manorHouse,
    turnpikeLane,
    woodGreen,
    boundsGreen,
    arnosGrove,
    southgate,
    oakwood,
    cockfosters
]);

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
westHarrow = new Node(41, "West Harrow");
harrowOnTheHill = new Node(42, "Harrow on the Hill");
northwickPark = new Node(43, "Northwick Park");
prestonRoad = new Node(44, "Preston Road");
wembleyPark = new Node(45, "Wembley Park");
finchleyRoad = new Node(46, "Finchley Road");
bakerStreet = new Node(47, "Baker Street");
greatPortlandStreet = new Node(48, "Great Portland Street");
eustonSquare = new Node(49, "Euston Square");
farringdon = new Node(50, "Farringdon");
barbican = new Node(51, "Barbican");
moorgate = new Node(52, "Moorgate");
liverpoolStreet = new Node(53, "Liverpool Street");
aldgate = new Node(54, "Aldgate");

nodes.concat([
    westHarrow,
    harrowOnTheHill,
    northwickPark,
    prestonRoad,
    wembleyPark,
    finchleyRoad,
    bakerStreet,
    greatPortlandStreet,
    eustonSquare,
    farringdon,
    barbican,
    moorgate,
    liverpoolStreet,
    aldgate
]);

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
walthamstowCentral = new Node(55, "Walthamstow Central");
blackhorseRoad = new Node(56, "Blackhorse Road");
tottenhamHale = new Node(57, "Tottenham Hale");
sevenSisters = new Node(58, "Seven Sisters");
highburyAndIslington = new Node(59, "Highbury and Islington");
euston = new Node(60, "Euston");
warrenStreet = new Node(61, "Warren Street");
oxfordCircus = new Node(62, "Oxford Circus");
victoriaN = new Node(63, "Victoria");
pimlico = new Node(64, "Pimlico");
vauxhall = new Node(65, "Vauxhall");
stockwell = new Node(66, "Stockwell");
brixton = new Node(67, "Brixton");

nodes.concat([
    walthamstowCentral,
    blackhorseRoad,
    tottenhamHale,
    sevenSisters,
    highburyAndIslington,
    euston,
    warrenStreet,
    oxfordCircus,
    victoriaN,
    pimlico,
    vauxhall,
    stockwell,
    brixton
]);

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

var _EMBED_VALIDATE_ARRAY_IDS = true;
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id !== i || lines[i].id !== i)
        _EMBED_VALIDATE_ARRAY_IDS = false;
}