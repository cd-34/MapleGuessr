// server/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dailyPuzzles = require('./dailyPuzzles.json'); // server-only, never served directly
const RESULTS_FILE = path.join(__dirname, 'results.json');

function getTodayString() {
    const now = new Date();
    return now.toISOString().split('T')[0]; 
}

function loadResults() {
    if (!fs.existsSync(RESULTS_FILE)) return {};
    return JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf-8'));
}

function saveResults(data) {
    fs.writeFileSync(RESULTS_FILE, JSON.stringify(data, null, 2));
}

// 1. Serve today's puzzle WITHOUT the answer
app.get('/api/puzzle/today', (req, res) => {
    const today = getTodayString();
    const puzzle = dailyPuzzles[today];

    if (!puzzle) return res.status(404).json({ error: 'No puzzle today' });

    res.json({
        date: today,
        hintImage: `/hints/${today}.png`
        // continent/node is intentionally withheld
    });
});

// 2. Check a guess server-side
app.post('/api/guess', (req, res) => {
    const today = getTodayString();
    const puzzle = dailyPuzzles[today];
    const { continent, node } = req.body;

    if (!puzzle) return res.status(404).json({ error: 'No puzzle today' });

    let result;
    if (continent === puzzle.continent && node === puzzle.node) {
        result = 'correct';
    } else if (continent === puzzle.continent) {
        result = 'partial';
    } else {
        result = 'wrong';
    }

    res.json({ result });
});

// 3. Record a finished game's guess count
app.post('/api/results', (req, res) => {
    const today = getTodayString();
    const { tries } = req.body; // e.g. 3, or 0/null for "gave up" / failed

    const results = loadResults();
    if (!results[today]) results[today] = {};
    results[today][tries] = (results[today][tries] || 0) + 1;

    saveResults(results);
    res.json({ ok: true });
});

// 4. Return today's aggregated stats
app.get('/api/stats/today', (req, res) => {
    const today = getTodayString();
    const results = loadResults();
    res.json(results[today] || {});
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));