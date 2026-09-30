const EPOCH = Date.UTC(2026, 10, 6);

// initialize map
const map = L.map('map', {
    crs: L.CRS.Simple, // maps longitude and latitude to x and y directly
    // note that y axis should be inverted going from bottom to top
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    doubleClickZoom: false // prevents map moving from double clicks
});

// Maple_World_webp dimensions, may need to adjust later
const imageWidth = 631;
const imageHeight = 461;

const bounds = [[0, 0], [imageHeight, imageWidth]];
L.imageOverlay('msmw.webp', bounds).addTo(map);
map.fitBounds(bounds);

// define continents
const continents = [
  {
    name: 'Victoria Island',
    center:[315, 80],
    radius: 65
  },
  {
    name: 'Maple Island',
    center:[393, 139],
    radius: 24
  },
  {
    name: 'Elnath Mts.',
    center:[270, 380],
    radius: 80
  },
  {
    name: 'Aqua Road',
    center:[283, 195],
    radius: 45
  },
  {
    name: 'Ludus Lake',
    center:[200, 265],
    radius: 58
  }
  // ...one polygon per continent
];

// temp circle markers for each continent
// these circles allow for pointer on hover but doesn't have functionality yet
const circleVI = L.circle([315, 80], {
    color: 'red',
    // fillColor: '#f03',
    // fillOpacity: 0.5,
    radius: 65
}).addTo(map);

const circleMI = L.circle([393, 139], {
    color: 'blue',
    fillColor: 'rgb(104, 162, 255)',
    fillOpacity: 0.5,
    radius: 24
}).addTo(map);

const circleEM = L.circle([270, 380], {
    color: 'white',
    fillColor: 'rgb(130, 130, 130)',
    fillOpacity: 0.5,
    radius: 80
}).addTo(map);

const circleAR = L.circle([283, 195], {
    color: 'blue',
    fillColor: 'rgb(144, 176, 230)',
    fillOpacity: 0.5,
    radius: 45
}).addTo(map);

const circleLL = L.circle([200, 265], {
    color: 'pink',
    fillColor: 'rgb(253, 192, 226)',
    fillOpacity: 0.5,
    radius: 58
}).addTo(map);