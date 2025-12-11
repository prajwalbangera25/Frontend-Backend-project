const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = './user.json';

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.post('/save', (req, res) => {
    try {
        const existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        existing.push(req.body);   

        fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));

        res.json({ message: "Saved!", data: req.body });
    } catch (err) {
        res.status(500).json({ error: "Error saving data." });
    }
});

app.get('/users', (req, res) => {
    try {
        const existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        res.json(existing);
    } catch (err) {
        res.status(500).json({ error: "Error reading data." });
    }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
