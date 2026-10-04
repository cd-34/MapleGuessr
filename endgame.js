import { fetchAnswer, loadStats } from './api.js';

const endgameOverlay = document.getElementById('endgame-overlay');
const endgameHeading = document.getElementById('endgame-heading');
const endgameNodeHeading = document.getElementById('endgame-node-heading');
const endgameNodeLink = document.getElementById('endgame-node-link');
const endgameHintImage = document.getElementById('endgame-hint-image');
const endgameChart = document.getElementById('endgame-chart');
const endgameShareButton = document.getElementById('endgame-share-button');
const endgameCloseButton = document.getElementById('endgame-close-button');

export async function showEndGameModal(won, tries, hintImageSrc, generateShareText, showCopyPopup) {
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

    endgameShareButton.onclick = () => {
        const text = generateShareText();
        navigator.clipboard.writeText(text).then(() => showCopyPopup('Copied to clipboard!'));
    };
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

endgameCloseButton.addEventListener('click', () => {
    endgameOverlay.classList.remove('show');
});