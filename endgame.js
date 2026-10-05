import { fetchAnswer, loadStats } from './api.js';

const endgameOverlay = document.getElementById('endgame-overlay');
const endgameHeading = document.getElementById('endgame-heading');
const endgameNodeHeading = document.getElementById('endgame-node-heading');
const endgameNodeLink = document.getElementById('endgame-node-link');
const endgameHintImage = document.getElementById('endgame-hint-image');
const endgameChart = document.getElementById('endgame-chart');
const endgameShareButton = document.getElementById('endgame-share-button');
const endgameCloseButton = document.getElementById('endgame-close-button');
const copyPopup = document.getElementById('copy-popup');
let copyPopupTimeout = null;
let currentGenerateShareText = null;

export async function showEndGameModal(won, tries, hintImageSrc, generateShareText) {
    currentGenerateShareText = generateShareText;

    endgameHeading.textContent = won
        ? `Congrats! You won in ${tries} ${tries === 1 ? 'try' : 'tries'}`
        : 'Better luck next time';

    const answer = await fetchAnswer();
    endgameNodeHeading.textContent = `${answer.continent}-${answer.node}`;
    endgameNodeLink.href = answer.link || '#';

    endgameHintImage.src = hintImageSrc;

    const stats = await loadStats();
    renderEndGameChart(stats, won ? tries : 'X');

    endgameOverlay.classList.add('show');
}

function renderEndGameChart(stats, userResult) {
    const labels = ['1', '2', '3', '4', '5', 'X'];
    const total = Object.values(stats).reduce((sum, count) => sum + count, 0) || 1;

    endgameChart.innerHTML = '';

    labels.forEach(label => {
        const count = stats[label === 'X' ? '0' : label] || 0;
        const pct = Math.round((count / total) * 100);

        const wrapper = document.createElement('div');
        wrapper.className = 'chart-bar-wrapper';

        const pctLabel = document.createElement('div');
        pctLabel.className = 'chart-bar-pct';
        pctLabel.textContent = `${pct}%`;

        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        if (String(userResult) === label) bar.classList.add('user-bar');
        bar.style.height = `${Math.max(pct, 2)}px`;

        const barLabel = document.createElement('div');
        barLabel.className = 'chart-bar-label';
        barLabel.textContent = label;

        wrapper.appendChild(pctLabel);
        wrapper.appendChild(bar);
        wrapper.appendChild(barLabel);
        endgameChart.appendChild(wrapper);
    });
}


function showCopyPopup(message = 'Copied to clipboard!') {
    copyPopup.textContent = message;
    copyPopup.classList.add('show');

    clearTimeout(copyPopupTimeout);
    copyPopupTimeout = setTimeout(() => {
        copyPopup.classList.remove('show');
    }, 2000);
}

endgameShareButton.addEventListener('click', () => {
    if (!currentGenerateShareText) return; // guard in case share is clicked before any game finished
    const text = currentGenerateShareText();
    navigator.clipboard.writeText(text).then(() => showCopyPopup());
});

endgameCloseButton.addEventListener('click', () => {
    endgameOverlay.classList.remove('show');
});

export function openStatsView() {
    endgameOverlay.classList.add('show');
}