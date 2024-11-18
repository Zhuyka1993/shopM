const express = require('express');
const path = require('path');
const app = express();

// Middleware для обробки JSON
app.use(express.json());

// Статичні файли React
app.use(express.static(path.join(__dirname, 'view', 'build')));

// API-роути
app.get('/api/example', (req, res) => {
    res.json({ message: 'Привіт, це API!' });
});

// Віддаємо React SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'build', 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер працює на порту ${PORT}`));