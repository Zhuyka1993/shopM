const express = require('express');
const path = require('path');
const app = express();

// Middleware for JSON
app.use(express.json());

// static files React
app.use(express.static(path.join(__dirname, 'view', 'build')));

// API-роути
app.get('/example', (req, res) => {
    res.json({ message: 'hi, this is api' });
});

// give React SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'build', 'index.html'));
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server port: ${PORT}`));