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
actonTown = new Node(14, "Acton Town");
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

nodes = nodes.concat([
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

nodes = nodes.concat([
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

nodes = nodes.concat([
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
buildEdges(walkableRoute, [eustonSquare, euston]);

//District main
upminster = new Node(68, "Upminster");
upminsterBridge = new Node(69, "Upminster Bridge");
hornchurch = new Node(70, "Hornchurch");
elmPark = new Node(71, "Elm Park");
dagenhamWest = new Node(72, "Dagenham West");
dagenhamHeathway = new Node(73, "Dagenham Heathway");
becontree = new Node(74, "Becontree");
upney = new Node(75, "Upney");
barking = new Node(76, "Barking");
eastHam = new Node(77, "East Ham");
uptonPark = new Node(78, "Upton Park");
plaistow = new Node(79, "Plaistow");
westHam = new Node(80, "West Ham");
bromleyByBow = new Node(81, "Bromley-by-Bow");
bowRoad = new Node(82, "Bow Road");
mileEnd = new Node(83, "Mile End");
stepneyGreen = new Node(84, "Stepney Green");
whitechapel = new Node(85, "Whitechapel");
aldgateEast = new Node(86, "Aldgate East");
towerHill = new Node(87, "Tower Hill");
monument = new Node(88, "Monument");
cannonStreet = new Node(89, "Cannon Street");
mansionHouse = new Node(90, "Mansion House");
blackfriars = new Node(91, "Blackfriars");
temple = new Node(92, "Temple");
embankment = new Node(93, "Embankment");
westminster = new Node(94, "Westminster");
stJamessPark = new Node(95, "St James's Park");
sloaneSqaure = new Node(96, "Sloane Square");
westKensington = new Node(97, "West Kensington");
ravenscourtPark = new Node(98, "Ravenscourt Park");
stamfordBrook = new Node(99, "Stamford Brook");
turnhamGreen = new Node(100, "Turnham Green");
chiswickPark = new Node(101, "Chiswick Park");
ealingBroadway = new Node(102, "Ealing Broadway");

nodes = nodes.concat([
    upminster,
    upminsterBridge,
    hornchurch,
    elmPark,
    dagenhamWest,
    dagenhamHeathway,
    becontree,
    upney,
    barking,
    eastHam,
    uptonPark,
    plaistow,
    westHam,
    bromleyByBow,
    bowRoad,
    mileEnd,
    stepneyGreen,
    whitechapel,
    aldgateEast,
    towerHill,
    monument,
    cannonStreet,
    mansionHouse,
    blackfriars,
    temple,
    embankment,
    westminster,
    stJamessPark,
    sloaneSqaure,
    westKensington,
    ravenscourtPark,
    stamfordBrook,
    turnhamGreen,
    chiswickPark,
    ealingBroadway
]);

buildEdges(district, [
    upminster,
    upminsterBridge,
    hornchurch,
    elmPark,
    dagenhamWest,
    dagenhamHeathway,
    becontree,
    upney,
    barking,
    eastHam,
    uptonPark,
    plaistow,
    westHam,
    bromleyByBow,
    bowRoad,
    mileEnd,
    stepneyGreen,
    whitechapel,
    aldgateEast,
    towerHill,
    monument,
    cannonStreet,
    mansionHouse,
    blackfriars,
    temple,
    embankment,
    westminster,
    stJamessPark,
    victoriaN,
    sloaneSqaure,
    southKensington,
    gloucesterRoad,
    earlsCourt,
    westKensington,
    baronsCourt,
    hammersmith,
    ravenscourtPark,
    stamfordBrook,
    turnhamGreen,
    chiswickPark,
    actonTown,
    ealingCommon,
    ealingBroadway
]);

//Bakerloo
harrowAndWealdstone = new Node(103, "Harrow & Wealdstone");
kenton = new Node(104, "Kenton");
southKenton = new Node(105, "South Kenton");
northWembley = new Node(106, "North Wembley");
wembleyCentral = new Node(107, "Wembley Central");
stonebridgePark = new Node(108, "Stonebridge Park");
willesdenJunction = new Node(109, "Willesden Junction");
kensalGreen = new Node(110, "Kensal Green");
queensPark = new Node(111, "Queen's Park");
kilburnPark = new Node(112, "Kilburn Park");
maidaVale = new Node(113, "Maida Vale");
warwickAvenue = new Node(114, "Warwick Avenue");
paddington = new Node(115, "Paddington");
edgwareRoad = new Node(116, "Edgware Road");
marylebone = new Node(117, "Marylebone");
regentsPark = new Node(118, "Regents Park");
charingCross = new Node(119, "Charing Cross");
waterloo = new Node(120, "Waterloo");
lambethNorth = new Node(121, "Lambeth North");
elephantAndCastle = new Node(122, "Elephant & Castle");
harlesden = new Node(123, "Harlesdon");

nodes = nodes.concat([
    harrowAndWealdstone,
    kenton,
    southKenton,
    northWembley,
    wembleyCentral,
    stonebridgePark,
    willesdenJunction,
    kensalGreen,
    queensPark,
    kilburnPark,
    maidaVale,
    warwickAvenue,
    paddington,
    edgwareRoad,
    marylebone,
    regentsPark,
    charingCross,
    waterloo,
    lambethNorth,
    elephantAndCastle,
    harlesden
]);

buildEdges(bakerloo, [
    harrowAndWealdstone,
    kenton,
    southKenton,
    northWembley,
    wembleyCentral,
    stonebridgePark,
    harlesden,
    willesdenJunction,
    kensalGreen,
    queensPark,
    kilburnPark,
    maidaVale,
    warwickAvenue,
    paddington,
    edgwareRoad,
    marylebone,
    bakerStreet,
    regentsPark,
    oxfordCircus,
    piccadillyCircus,
    charingCross,
    embankment,
    waterloo,
    lambethNorth,
    elephantAndCastle,
]);
buildEdges(walkableRoute, [northwickPark, kenton]);

//Central
westRuislip = new Node(124, "West Ruislip");
ruislipGardens = new Node(125, "Ruslip Gardens");
southRuislip = new Node(126, "South Ruslip");
northolt = new Node(127, "Northolt");
greenford = new Node(128, "Greenford");
perivale = new Node(129, "Perivale");
hangerLane = new Node(130, "Hanger Lane");
northActon = new Node(131, "North Acton");
eastActon = new Node(132, "East Acton");
whiteCity = new Node(133, "White City");
shepherdsBush = new Node(134, "Shepherd's Bush");
hollandPark = new Node(135, "Holland Park");
nottingHillGate = new Node(136, "Notting Hill Gate");
queensway = new Node(137, "Queensway");
lancasterGate = new Node(138, "Lancaster Gate");
marbleArch = new Node(139, "Marble Arch");
bondStreet = new Node(140, "Bond Street");
tottenhamCourtRoad = new Node(141, "Tottenham Court Road");
chanceryLane = new Node(142, "Chancery Lane");
stPauls = new Node(143, "St Paul's");
bank = new Node(144, "Bank");
bethnalGreen = new Node(145, "Bethnal Green");
mileEnd = new Node(146, "Mile End");
stratford = new Node(147, "Stratford");
leyton = new Node(148, "Leyton");
leytonstone = new Node(149, "Leyonstone");
wanstead = new Node(150, "Wanstead");
redbridge = new Node(151, "Redbridge");
gantsHill = new Node(152, "Gants Hill");
newburyPark = new Node(153, "Newbury Park");
barkingside = new Node(154, "Barkingside");
fairlop = new Node(155, "Fairlop");
hainault = new Node(156, "Hainault");
grangeHill = new Node(157, "Grange Hill");
chigwell = new Node(158, "Chigwell");
rodingValley = new Node(159, "Roding Valley");
buckhurstHill = new Node(160, "Buckhurst Hill");
loughton = new Node(161, "Loughton");
deben = new Node(162, "Deben");
theydonBois = new Node(163, "Theydon Bois");
epping = new Node(164, "Epping");
westActon = new Node(165, "West Acton");
woodLane = new Node(166, "Wood Lane");
snaresbrook = new Node(167, "Snaresbrook");
southWoodford = new Node(168, "South Woodford");
woodford = new Node(169, "Woodford");

nodes = nodes.concat([
    westRuislip,
    ruislipGardens,
    southRuislip,
    northolt,
    greenford,
    perivale,
    hangerLane,
    northActon,
    eastActon,
    whiteCity,
    shepherdsBush,
    hollandPark,
    nottingHillGate,
    queensway,
    lancasterGate,
    marbleArch,
    bondStreet,
    tottenhamCourtRoad,
    chanceryLane,
    stPauls,
    bank,
    bethnalGreen,
    mileEnd,
    stratford,
    leyton,
    leytonstone,
    wanstead,
    redbridge,
    gantsHill,
    newburyPark,
    barkingside,
    fairlop,
    hainault,
    grangeHill,
    chigwell,
    rodingValley,
    buckhurstHill,
    loughton,
    deben,
    theydonBois,
    epping,
    westActon,
    woodLane,
    snaresbrook,
    southWoodford,
    woodford
]);

buildEdges(central, [
    westRuislip,
    ruislipGardens,
    southRuislip,
    northolt,
    greenford,
    perivale,
    hangerLane,
    northActon,
    eastActon,
    whiteCity,
    shepherdsBush,
    hollandPark,
    nottingHillGate,
    queensway,
    lancasterGate,
    marbleArch,
    bondStreet,
    oxfordCircus,
    tottenhamCourtRoad,
    holborn,
    chanceryLane,
    stPauls,
    bank,
    liverpoolStreet,
    bethnalGreen,
    mileEnd,
    stratford,
    leyton,
    leytonstone,
    wanstead,
    redbridge,
    gantsHill,
    newburyPark,
    barkingside,
    fairlop,
    hainault,
    grangeHill,
    chigwell,
    rodingValley,
    woodford
]);
buildEdges(central, [
   woodford,
   buckhurstHill,
   loughton,
   deben,
   theydonBois,
   epping
]);
buildEdges(central, [
    ealingBroadway,
    westActon,
    northActon
]);
buildEdges(walkableRoute, [whiteCity, woodLane]);
buildEdges(walkableRoute, [bank, monument]);

//Circle
goldhawkRoad = new Node(170, "Goldhawk Road");
shepherdsBushMarket = new Node(171, "Shepherd's Bush Market");
latimerRoad = new Node(172, "Latimer Road");
ladbrokeRoad = new Node(173, "Ladbroke Road");
westbournePark = new Node(174, "Westbourne Park");
royalOak = new Node(175, "Royal Oak");
highStreetKensington = new Node(176, "High Street Kensington");
bayswater = new Node(177, "Bayswater");

nodes = nodes.concat([
    goldhawkRoad,
    shepherdsBushMarket,
    latimerRoad,
    ladbrokeRoad,
    westbournePark,
    royalOak,
    highStreetKensington,
    bayswater
]);

buildEdges(circle,[
    hammersmith,
    goldhawkRoad,
    shepherdsBushMarket,
    woodLane,
    latimerRoad,
    ladbrokeRoad,
    westbournePark,
    royalOak,
    paddington,
    edgwareRoad,
    bakerStreet,
    greatPortlandStreet,
    eustonSquare,
    kingsCrossStPancras,
    farringdon,
    barbican,
    moorgate,
    liverpoolStreet,
    aldgate,
    towerHill,
    monument,
    cannonStreet,
    mansionHouse,
    blackfriars,
    temple,
    embankment,
    westminster,
    stJamessPark,
    victoriaN,
    sloaneSqaure,
    southKensington,
    gloucesterRoad,
    highStreetKensington,
    nottingHillGate,
    bayswater,
    paddington
]);

//District branches
richmond = new Node(178, "Richmond");
kewGardens = new Node(179, "Kew Gardens");
gunnersbury = new Node(180, "Gunnersbury");
wimbledon = new Node(181, "Wimbledon");
wimbledonPark = new Node(182, "Wimbledon Park");
southfields = new Node(183, "Southfields");
eastPutney = new Node(184, "East Putney");
putneyBridge = new Node(185, "Putney Bridge");
parsonsGreen = new Node(186, "Parsons Green");
fulhamBroadway = new Node(187, "Fulham Broadway");
westBrompton = new Node(188, "West Brompton");

nodes = nodes.concat([
    richmond,
    kewGardens,
    gunnersbury,
    wimbledon,
    wimbledonPark,
    southfields,
    eastPutney,
    putneyBridge,
    parsonsGreen,
    fulhamBroadway,
    westBrompton
]);

buildEdges(district, [
    turnhamGreen,
    gunnersbury,
    kewGardens,
    richmond
]);
buildEdges(district, [
    wimbledon,
    wimbledonPark,
    southfields,
    eastPutney,
    putneyBridge,
    parsonsGreen,
    fulhamBroadway,
    westBrompton,
    earlsCourt,
    highStreetKensington,
    nottingHillGate,
    bayswater,
    paddington,
    edgwareRoad
]);

//Northern
morden = new Node(189, "Morden");
southWimbledon = new Node(190, "South Wimbledon");
colliersWood = new Node(191, "Colliers Wood");
tootingBroadway = new Node(192, "Tooting Broadway");
tootingBec = new Node(193, "Tooting Bec");
balham = new Node(194, "Balham");
claphamSouth = new Node(195, "Clapham South");
claphamCommon = new Node(196, "Clapham Common");
claphamNorth = new Node(197, "Clapham North");
oval = new Node(198, "Oval");
kennington = new Node(199, "Kennington");
borough = new Node(200, "Borough");
londonBridge = new Node(201, "London Bridge");
oldStreet = new Node(202, "Old Street");
angel = new Node(203, "Angel");
camdenTown = new Node(204, "Camden Town");
kentishTown = new Node(205, "Kentish Town");
tufnellPark = new Node(206, "Tufnell Park");
archway = new Node(207, "Archway");
highgate = new Node(208, "Highgate");
eastFinchley = new Node(209, "East Finchley");
finchleyCentral = new Node(210, "Finchley Central");
millHillEast = new Node(211, "Mill Hill East");
westFinchley = new Node(212, "West Finchley");
woodsidePark = new Node(213, "Woodside Park");
totteridgeaAndWhetstone = new Node(214, "Totteridge & Whetstone");
highBarnet = new Node(215, "High Barnet");
edgware = new Node(216, "Edgware");
burntOak = new Node(217, "Burnt Oak");
colindale = new Node(218, "Colindale");
hendonCentral = new Node(219, "Hendon Central");
brentCross = new Node(220, "Brent Cross");
goldersGreen = new Node(221, "Golders Green");
hampstead = new Node(222, "Hampstead");
belsizePark = new Node(223, "Belsize Park");
chalkFarm = new Node(224, "Chalk Farm");
morningtonCrescent = new Node(225, "Mornington Crescent");
goodgeStreet = new Node(226, "Goodge Street");

nodes = nodes.concat([
    morden,
    southWimbledon,
    colliersWood,
    tootingBroadway,
    tootingBec,
    balham,
    claphamSouth,
    claphamCommon,
    claphamNorth,
    oval,
    kennington,
    borough,
    londonBridge,
    oldStreet,
    angel,
    camdenTown,
    kentishTown,
    tufnellPark,
    archway,
    highgate,
    eastFinchley,
    finchleyCentral,
    millHillEast,
    westFinchley,
    woodsidePark,
    totteridgeaAndWhetstone,
    highBarnet,
    edgware,
    burntOak,
    colindale,
    hendonCentral,
    brentCross,
    goldersGreen,
    hampstead,
    belsizePark,
    chalkFarm,
    morningtonCrescent,
    goodgeStreet
]);
buildEdges(northern, [
    morden,
    southWimbledon,
    colliersWood,
    tootingBroadway,
    tootingBec,
    balham,
    claphamSouth,
    claphamCommon,
    claphamNorth,
    stockwell,
    oval,
    kennington,
    elephantAndCastle,
    borough,
    londonBridge,
    monument,
    moorgate,
    oldStreet,
    angel,
    kingsCrossStPancras,
    euston,
    camdenTown,
    kentishTown,
    tufnellPark,
    archway,
    highgate,
    eastFinchley,
    finchleyCentral,
    westFinchley,
    woodsidePark,
]);
buildEdges(northern, [finchleyCentral, millHillEast]);
buildEdges(northern, [
    edgware,
    burntOak,
    colindale,
    hendonCentral,
    brentCross,
    goldersGreen,
    hampstead,
    belsizePark,
    chalkFarm,
    camdenTown,
    morningtonCrescent,
    euston,
    warrenStreet,
    goodgeStreet,
    tottenhamCourtRoad,
    leicesterSquare,
    charingCross,
    embankment,
    waterloo,
    kennington
]);

//Jubilee
stanmore = new Node(227, "Stanmore");
canonsPark = new Node(228, "Canons Park");
queensbury = new Node(229, "Queensbury");
kingsbury = new Node(230, "Kingsbury");
neasden = new Node(231, "neasden");
dollisHill = new Node(232, "Dollis Hill");
willesdenGreen = new Node(233, "Willesden Green");
kilburn = new Node(234, "Kilburn");
westHampstead = new Node(235, "West Hampstead");
swissCottage = new Node(236, "Swiss Cottage");
stJohnsWood = new Node(237, "St John's Wood");
southwark = new Node(238, "Southwark");
bermondsey = new Node(239, "Bermondsey");
canadaWater = new Node(240, "Canada Water");
canaryWarf = new Node(241, "Canary Warf");
northGreenwich = new Node(242, "North Greenwich");
canningTown = new Node(243, "Canning Town");

nodes = nodes.concat([
    stanmore,
    canonsPark,
    queensbury,
    kingsbury,
    neasden,
    dollisHill,
    willesdenGreen,
    kilburn,
    westHampstead,
    swissCottage,
    stJohnsWood,
    southwark,
    bermondsey,
    canadaWater,
    canaryWarf,
    northGreenwich,
    canningTown
]);
buildEdges(jubilee, [
    stanmore,
    canonsPark,
    queensbury,
    kingsbury,
    wembleyPark,
    neasden,
    dollisHill,
    willesdenGreen,
    kilburn,
    westHampstead,
    finchleyRoad,
    swissCottage,
    stJohnsWood,
    bakerStreet,
    bondStreet,
    greenPark,
    westminster,
    waterloo,
    southwark,
    londonBridge,
    bermondsey,
    canadaWater,
    canaryWarf,
    northGreenwich,
    canningTown,
    westHam,
    stratford
]);

//Waterloo and City
buildEdges(wAndC, [waterloo, bank]);

var _EMBED_VALIDATE_ARRAY_IDS = true;
var _EMBED_ARRAY_LENGTH = nodes.length;
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id !== i)
        _EMBED_VALIDATE_ARRAY_IDS = false;
}
for (var i = 0; i < lines.length; i++) {
    if (lines[i].id !== i)
        _EMBED_VALIDATE_ARRAY_IDS = false;
}