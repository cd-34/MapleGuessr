export let currentMarkers = [];

export function clearMarkers(map) {
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];
}

// reusable divIcon function for islands with different radii
// returns a Leaflet icon object that you can attach to a marker
export function createContinentIcon(radius) {
    return L.divIcon({
        className: 'continent-marker',
        html: `<div class="continent-hitbox" style="width:${radius * 2}px; height:${radius * 2}px;"></div>`,
        iconSize: [radius * 2, radius * 2],
        iconAnchor: [radius, radius] // center the icon on the coordinate
    });
}

export function createNodeIcon(radius, type = 'regular', dotSize = 14) {
    return L.divIcon({
        className: 'node-marker',
        // border for each node
        html: `
            <div class="copy-popup-wrapper">
                <div class="node-hitbox node-${type}" style="width:${radius * 1.01}px; height:${radius * 1.01}px;">
                    <div class="node-dot" style="width:${dotSize}px; height:${dotSize}px;"></div>
                </div>
                <span class="popuptext"></span>
            </div>
        `,
        iconSize: [radius * 2, radius * 2],
        iconAnchor: [radius, radius]
    });
}

// iterates over the continents array to create a marker using that continent's radius
// addTo(map) places the marker onto the Leaflet map
export function addContinentMarkers(map, continents, onContinentClick) {
    continents.forEach(continent => {
        const marker = L.marker(continent.center, {
            icon: createContinentIcon(continent.radius)
        }).addTo(map);

        // attaches a click handler for each marker
        marker.on('click', () => {
            onContinentClick(continent);
        });

        currentMarkers.push(marker);
    });
}

// iterates through the list of nodes for the selected continent
// and adds markers based on their center
export function addGuessNodeMarkers(map, continent, onNodeClick) {
    continent.nodes.forEach(node => {
        const marker = L.marker(node.center, {
            icon: createNodeIcon(node.radius, node.type)
        }).addTo(map);

        marker.on('click', () => {
            onNodeClick(node, marker);
        });

        currentMarkers.push(marker);
    });
}