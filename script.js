const EPOCH = Date.UTC(2026, 10, 6);

// initialize map
const map = L.map('map', {
    crs: L.CRS.Simple, // maps longitude and latitude to x and y directly
    // note that y axis should be inverted going from bottom to top
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl: false,
    scrollWheelZoom: false,
    touchZoom: false,
    boxZoom: false,
    doubleClickZoom: false, 
    attributionControl: false
});

// Maple_World_webp dimensions, may need to adjust later
const imageWidth = 631;
const imageHeight = 461;

// track current map state so that old markers don't linger when swapping maps
let currentOverlay = null;
let currentMarkers = [];

function clearMarkers() {
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];
}

// load a given map with a url
function loadMap(imageUrl, bounds) {
    if (currentOverlay) {
        console.log('removing layer id: ', currentOverlay._leaflet_id);
        map.removeLayer(currentOverlay);
    }
    // console.log('current overlay before remove:', currentOverlay);
    currentOverlay = L.imageOverlay(imageUrl, bounds).addTo(map);
    console.log('added layer id: ', currentOverlay._leaflet_id);
    // console.log('current overlay after remove:', currentOverlay);
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