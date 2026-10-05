import { loadTodaysPuzzle, checkGuess, submitFinalResult, loadStats, fetchAnswer } from './api.js';
import { currentMarkers, clearMarkers, addContinentMarkers, addGuessNodeMarkers } from './markers.js';
import { continents } from './continents.js';
import { showEndGameModal, openStatsView } from './endgame.js';

// track current map state so that old markers don't linger when swapping maps
let currentOverlay = null;
// track map state to see if we're in the world map or not
let currentLevel = 'world';
// pendingGuess and selectedNode used for confirm button
let pendingGuess = null;
let selectedNode = null;
let guesses = [];
let gameOver = false;
let nodePopupTimeout = null;
let copyPopupTimeout = null;
let todaysPuzzleMeta = null; // no answer

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



// allows players to click on nodes 
// main orchestrator for the game
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

function loadWorldMap() {
    loadMap('msmw-resized.png', worldBounds);
    clearMarkers(map);
    addContinentMarkers(map, continents, loadContinentMap);
    currentLevel = 'world';
    pendingGuess = null;
    updateButtonStates();
}

function loadContinentMap(continent) {
    loadMap(continent.mapImage, continent.mapBounds);
    clearMarkers(map);
    // console.log('clearmarkers should work here');
    currentLevel = continent.name;
    // console.log('clicked on: ', continent.name);
    pendingGuess = null;
    selectedNode = null;
    addGuessNodeMarkers(map, continent, selectNode);
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


confirmButton.addEventListener('click', async () => {
    if (!selectedNode) {
        return;
    }
    // guesses array is filled by renderGuesses
    if (guesses.length >= MAX_GUESSES) {
        return;
    }

    const result = await checkGuess(currentLevel, selectedNode.id);

    guesses.push({ continent: currentLevel, node: selectedNode.id, result });
    renderGuesses();

    if (result === 'correct' || guesses.length >= MAX_GUESSES) {
        gameOver = true;
        const won = result === 'correct';
        await submitFinalResult(won ? guesses.length : 0);
        await showEndGameModal(won, guesses.length, hintImage.src, generateShareText);
    }

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
    openStatsView();
});

// returns todays date as a string for finding the correct hint file
function getTodaysDate() {
    const now = new Date();
    const yyyy= now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    // console.log(`${yyyy}-${mm}-${dd}`);
    return `${yyyy}-${mm}-${dd}`;
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
    console.log(`MapleGuessr: ${todaysDate}\nhttps://mapleguessr.com\n${score}\n${shareString}`);
    return `MapleGuessr: ${todaysDate}\nhttps://mapleguessr.com\n${score}\n${shareString}`;
}

// new endpoint that reveals the full answer
// app.get('/api/answer/today', (req, res) => {
//     const today = getTodayString();
//     const puzzle = dailyPuzzles[today];

//     if (!puzzle) return res.status(404).json({ error: 'No puzzle today' });

//     res.json({
//         continent: puzzle.continent,
//         node: puzzle.node,
//         link: puzzle.link
//     });
// });

async function init() {
    try {
        todaysPuzzleMeta = await loadTodaysPuzzle();

        if (todaysPuzzleMeta.error) {
            console.error('No puzzle available today.');
            hintImage.alt = 'No puzzle available today.';
        } else {
            hintImage.src = todaysPuzzleMeta.hintImage;
        }
    } catch (err) {
        console.error('Failed to load today\'s puzzle:', err);
    }

    loadWorldMap();
}

init();