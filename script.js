// track current map state so that old markers don't linger when swapping maps
let currentOverlay = null;
let currentMarkers = [];
// track map state to see if we're in the world map or not
let currentLevel = 'world';
// pendingGuess and selectedNode used for confirm button
let pendingGuess = null;
let selectedNode = null;
let guesses = [];
let gameOver = false;
let nodePopupTimeout = null;
let copyPopupTimeout = null;


const backButton = document.getElementById('back-button');
const confirmButton = document.getElementById('confirm-button');
const helpButton = document.getElementById('help-button');
const giveUpButton = document.getElementById('give-up-button');
const shareButton = document.getElementById('share-button');
const copyPopup = document.getElementById('copy-popup');
const worldBounds = [[0, 0], [470, 640]]; // map pixel size - might need to change if swapping to HD map
const hintImage = document.getElementById('hint-image');
const MAX_GUESSES = 5;
const guessStack = document.getElementById('guess-stack');

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

function clearMarkers() {
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];
}

// load a given map with a url
function loadMap(imageUrl, bounds) {
    if (currentOverlay) {
        // console.log('removing layer id: ', currentOverlay._leaflet_id);
        map.removeLayer(currentOverlay);
    }
    // console.log('current overlay before adding:', currentOverlay);
    currentOverlay = L.imageOverlay(imageUrl, bounds).addTo(map);
    // console.log('added layer id: ', currentOverlay._leaflet_id);
    // console.log('current overlay after adding:', currentOverlay);
    map.setMaxBounds(bounds);
    map.fitBounds(bounds);
}

const dailyPuzzle = {
    '2026-10-02': { continent: 'VI', node: 'LH' },
    '2026-10-03': { continent: 'VI', node: 'H' },
    '2026-10-04': { continent: 'VI', node: 'E' }
}

// define continents as an array of objects
const continents = [
    {
        name: 'VI',
        center: [315, 80],
        radius: 65,
        mapImage: 'msvi.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            // center [vertical bottom up, horizontal left to right]
            // the node starts in the top left and has a radius
            // https://pixspy.com/ gives 101, 374 
            // flip the numbers, so 374, 101
            // first number subtract from 459, second number add 8
            // 83, 113
                // once I finalize the map size and make sure it scales properly 
                // I'll create a function to convert this automatically
            // radius affects the hitbox size 
            { id: 'LH', center: [85, 110], radius: 15 },
            { id: 'H', center: [82, 300], radius: 15 },
            { id: 'E', center: [208, 453], radius: 15 }
        ]
    },
    {
        name: 'MI',
        center:[393, 139],
        radius: 24,
        mapImage: 'msmi.webp',
        mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25 }
        ]
    },
    {
        name: 'AR',
        center:[283, 195],
        radius: 45,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25 }
        ]
    },
    {
        name: 'LL',
        center:[200, 265],
        radius: 58,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25 }
        ]
    },
    {
        name: 'EM',
        center:[270, 380],
        radius: 80,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25 }
        ]
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
function addContinentMarkers() {
    continents.forEach(continent => {
        const marker = L.marker(continent.center, {
            icon: createContinentIcon(continent.radius),
            // riseOnHover: true    
        }).addTo(map);

        // attaches a click handler for each marker
        marker.on('click', () => {
            loadContinentMap(continent);
            // clearMarkers(); // removes world-map continent markers
        });

        currentMarkers.push(marker);
    });
}

// iterates through the list of nodes for the selected continent
// and adds markers based on their center
function addGuessNodeMarkers(continent) {
    continent.nodes.forEach(node => {
        const marker = L.marker(node.center, {
            icon: createNodeIcon(node.radius) 
        }).addTo(map);

        marker.on('click', () => {
            selectNode(node, marker);
        })

        currentMarkers.push(marker);
    })
}

// allows players to click on nodes 
function selectNode(node, marker) {
    // record node object and its id
    // maybe should rename to be more clear
    selectedNode = node;
    pendingGuess = node.id;

    if (gameOver) {
        return;
    }
    
    // removes previous node selections and selects a new one
    currentMarkers.forEach(m => m.getElement()?.classList.remove('selected-node'));
    marker.getElement()?.classList.add('selected-node');

    currentMarkers.forEach(m => {
        m.getElement()?.querySelector('.popuptext')?.classList.remove('show');
    });

    // grabs a reference to the specific marker and produces a popup for 2 seconds
    const popupEl = marker.getElement()?.querySelector('.popuptext');
    if (popupEl) {
        popupEl.textContent = node.id;
        popupEl.classList.add('show');

        clearTimeout(nodePopupTimeout);
        nodePopupTimeout = setTimeout(() => {
            popupEl.classList.remove('show');
        }, 2000);
    }

    updateButtonStates();
}

function createNodeIcon(radius, dotSize = 14) {
    return L.divIcon({
        className: 'node-marker',
        // border for each node
        html: `
            <div class="node-hitbox" style="width:${radius * 1.01}px; height:${radius * 1.01}px;">
                <div class="node-dot" style="width:${dotSize}px; height:${dotSize}px;"></div>
            </div>
            <span class="popuptext">Node</span>
        `,
        iconSize: [radius * 2, radius * 2],
        iconAnchor: [radius, radius]
    })
}

function loadWorldMap() {
    loadMap('msmw-resized.png', worldBounds);
    clearMarkers();
    addContinentMarkers();
    currentLevel = 'world';
    pendingGuess = null;
    updateButtonStates();
}

function loadContinentMap(continent) {
    loadMap(continent.mapImage, continent.mapBounds);
    clearMarkers();
    // console.log('clearmarkers should work here');
    currentLevel = continent.name;
    // console.log('clicked on: ', continent.name);
    currentLevel = continent.name;
    pendingGuess = null;
    selectedNode = null;
    addGuessNodeMarkers(continent);
    updateButtonStates();
}

function updateButtonStates() {
    backButton.disabled = (currentLevel === 'world');
    confirmButton.disabled = gameOver || (pendingGuess === null);
    shareButton.classList.toggle('visible', gameOver);
}

// back button returns you to the world map with the appropriate markers
// only enabled when not currently on the world map
backButton.addEventListener('click', () => {
    loadWorldMap();
});

const todaysDate = getTodaysDate();
const todaysPuzzle = dailyPuzzle[getTodaysDate()];

confirmButton.addEventListener('click', () => {
    if (!selectedNode) {
        return;
    }
    // guesses array is filled by renderGuesses
    if (guesses.length >= MAX_GUESSES) {
        return;
    }

    const result = recordGuess(currentLevel, selectedNode.id);
    if (result === 'correct' || guesses.length >= MAX_GUESSES) {
        gameOver = true;
    }

    // these three lines are only here for debugging purposes
    const correct = currentLevel === todaysPuzzle.continent && selectedNode.id === todaysPuzzle.node;
    console.log(`dailyPuzzle.continent: ${todaysPuzzle.continent}, selectedNode.id: ${todaysPuzzle.node}`)
    console.log(`selected ${selectedNode.id}, correct: ${correct}`);

    pendingGuess = null;
    selectedNode = null;
    updateButtonStates();
});

helpButton.addEventListener('click', () => {
    console.log(`elp ` + Date.now());
})

giveUpButton.addEventListener('click', () => {
    console.log(`give up ` + Date.now());
    // #FEB2B2
})

function showCopyPopup(message = 'Copied to clipboard!') {
    copyPopup.textContent = message;
    copyPopup.classList.add('show');

    clearTimeout(copyPopupTimeout);
    copyPopupTimeout = setTimeout(() => {
        copyPopup.classList.remove('show');
    }, 2000);
}

shareButton.addEventListener('click', () => {
    const text = generateShareText();
    navigator.clipboard.writeText(text)
        .then(() => showCopyPopup('Copied to clipboard!')
    );
    copyPopup.classList.toggle("show");
    console.log('copied');
    // popup here
})

// returns todays date as a string for finding the correct hint file
function getTodaysDate() {
    const now = new Date();
    const yyyy= now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    // console.log(`${yyyy}-${mm}-${dd}`);
    return `${yyyy}-${mm}-${dd}`;
}

hintImage.src = `hints/${getTodaysDate()}.png`; // currently producing error in console because of current refactor
hintImage.alt = 'Hint';

// used for colour coding and for the confirmButton to check if game is over
function recordGuess(continent, node) {
    let result;
    if (continent === todaysPuzzle.continent && node === todaysPuzzle.node) {
        result = 'correct';
    } else if (continent === todaysPuzzle.continent) {
        result = 'partial';
    } else {
        result = 'wrong';
    }

    guesses.push({ continent, node, result });
    renderGuesses();
    return result;
}

// adds guesses to the stack
function renderGuesses() {
    guessStack.innerHTML = '';
    guesses.forEach((guess, index) => {
        const box = document.createElement('div');
        box.className = `guess-box ${guess.result}`;
        box.textContent = `#${index + 1}: ${guess.continent}-${guess.node}`;
        guessStack.appendChild(box);
    });
}

function generateShareText() {
    const shareString = guesses.map(guess => {
        if (guess.result === 'correct') {
            return '🟩';
        }
        if (guess.result === 'partial') {
            return '🟧';
        }
        return '🟥';
    }).join('');

    const score = guesses[guesses.length - 1].result === 'correct'
        ? `${guesses.length}/${MAX_GUESSES}`
        : `X/${MAX_GUESSES}`;

    // console.log(`${getTodaysDate}`);
    console.log(`MapleGuessr: ${todaysDate}\nhttps:mapleguessr.com\n${score}\n${shareString}`);
    return `MapleGuessr: ${todaysDate}\nhttps:mapleguessr.com\n${score}\n${shareString}`;
}

loadWorldMap();