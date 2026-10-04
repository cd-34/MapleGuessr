// no dependency on leaflet or game state 
// server logic now separated

const API_BASE = '';

export async function loadTodaysPuzzle() {
    const res = await fetch(`${API_BASE}/api/puzzle/today`);
    return res.json(); // { date, hintImage } or { error }
}

export async function checkGuess(continent, node) {
    const res = await fetch(`${API_BASE}/api/guess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ continent, node })
    });
    const data = await res.json();
    return data.result; // 'correct' | 'partial' | 'wrong'
}

export async function submitFinalResult(tries) {
    await fetch(`${API_BASE}/api/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tries })
    });
}

export async function loadStats() {
    const res = await fetch(`${API_BASE}/api/stats/today`);
    return res.json(); // e.g. { "1": 4, "2": 12, "0": 2 }
}

export async function fetchAnswer() {
    const res = await fetch(`${API_BASE}/api/answer/today`);
    return res.json(); // { continent, node link }
}