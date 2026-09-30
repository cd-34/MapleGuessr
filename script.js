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

// track current map state so that old markers don't linger when swapping maps
let currentOverlay = null;
let currentMarkers = [];

function clearMarkers() {
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];
}

// load a given map with a url
function loadMap(imageUrl, bounds) {
    if (currentOverlay) map.removeLayer(currentOverlay);

    currentOverlay = L.imageOverlay(imageUrl, bounds).addTo(map);
    map.setMaxBounds(bounds);
    map.fitBounds(bounds);
}

// define continents
const continents = [
    {
        name: 'VI',
        center:[315, 80],
        radius: 65,
        mapImage: 'msvi.webp',
        mapBounds: [[0, 0], [470, 640]]
    },
    {
        name: 'MI',
        center:[393, 139],
        radius: 24,
        mapImage: 'msmi.webp',
        mapBounds: [[0, 0], [455, 640]]
    },
    {
        name: 'AR',
        center:[283, 195],
        radius: 45
    },
    {
        name: 'LL',
        center:[200, 265],
        radius: 58
    },
    {
        name: 'EM',
        center:[270, 380],
        radius: 80
    }
  // ...one polygon per continent
];

// temp circle markers for each continent
// these circles allow for pointer on hover but doesn't have functionality yet
// const circleVI = L.circle([315, 80], {
//     color: 'red',
//     // fillColor: '#f03',
//     // fillOpacity: 0.5,
//     radius: 65
// }).addTo(map);

// const circleMI = L.circle([393, 139], {
//     color: 'blue',
//     fillColor: 'rgb(104, 162, 255)',
//     fillOpacity: 0.5,
//     radius: 24
// }).addTo(map);

// const circleAR = L.circle([283, 195], {
//     color: 'blue',
//     fillColor: 'rgb(144, 176, 230)',
//     fillOpacity: 0.5,
//     radius: 45
// }).addTo(map);

// const circleLL = L.circle([200, 265], {
//     color: 'pink',
//     fillColor: 'rgb(253, 192, 226)',
//     fillOpacity: 0.5,
//     radius: 58
// }).addTo(map);

// const circleEM = L.circle([270, 380], {
//     color: 'white',
//     fillColor: 'rgb(130, 130, 130)',
//     fillOpacity: 0.5,
//     radius: 80
// }).addTo(map);

// reusable divIcon function for islands with different radii
// returns a Leaflet icon object that you can attach to a marker
function createContinentIcon(radius) {
    return L.divIcon({
        className: 'continent-marker',
        html: `<div class="continent-hitbox" style="width:${radius*2}px; height:${radius*2}px;"></div>`,
        iconSize: [radius * 2, radius * 2],
        iconAnchor: [radius, radius] // center the icon on the coordinate
    });
}

// iterates over the continents array to create a marker using that continent's radius
// addTo(map) places the marker onto the Leaflet map
continents.forEach(continent => {
    const marker = L.marker(continent.center, {
        icon: createContinentIcon(continent.radius),
        // riseOnHover: true    
    }).addTo(map);

    // attaches a click handler for each marker
    marker.on('click', () => {
        loadMap(continent.mapImage, continent.mapBounds);
        clearMarkers(); // removes world-map continent markers
    });

    currentMarkers.push(marker);
});

// initialize world map 
const worldBounds = [[0, 0], [461, 631]];
loadMap('msmw.webp', worldBounds);