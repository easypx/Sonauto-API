const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Erlaubt alle Origins (für Dev)
app.use(express.json());
app.use(express.static('public')); // Serviert statische Dateien aus dem public-Ordner

const API_BASE = 'https://api.sonauto.ai/v1';

// Proxy für POST /generations
app.post('/api/generations', async (req, res) => {
    try {
        console.log('Request body:', req.body); // Logge den Request-Body
        console.log('Authorization header:', req.headers.authorization); // Logge den API-Key
        const response = await axios.post(`${API_BASE}/generations`, req.body, {
            headers: { 'Authorization': req.headers.authorization }
        });
        console.log('Sonauto API response:', response.data); // Logge die API-Antwort
        res.json(response.data);
    } catch (error) {
        console.error('Error in /api/generations:', error.message); // Detaillierte Fehlerausgabe
        if (error.response) {
            console.error('Sonauto API error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    }
});

// Proxy für GET /generations/{task_id}
app.get('/api/generations/:taskId', async (req, res) => {
    try {
        console.log('Task ID:', req.params.taskId); // Logge die taskId
        console.log('Authorization header:', req.headers.authorization); // Logge den Authorization-Header
        const response = await axios.get(`${API_BASE}/generations/${req.params.taskId}`, {
            headers: { 'Authorization': req.headers.authorization }
        });
        console.log('Sonauto API response:', response.data); // Logge die API-Antwort
        res.json(response.data);
    } catch (error) {
        console.error('Error in /api/generations/:taskId:', error.message); // Detaillierte Fehlerausgabe
        if (error.response) {
            console.error('Sonauto API error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    }
});

app.listen(PORT, () => console.log(`Proxy-Server läuft auf http://localhost:${PORT}`));