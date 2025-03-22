const express = require('express');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const productRoutes = require('./routes/products'); 

const app = express();

// Middleware for JSON
app.use(express.json());

// Визначаємо середовище
const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
    // Налаштовуємо Webpack для режиму розробки
    const compiler = webpack(webpackConfig);
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
        })
    );
    app.use(webpackHotMiddleware(compiler));
} else {
    // У продакшн-режимі віддаємо статичні файли
    app.use(express.static(path.join(__dirname, 'view', 'build')));
}

// Асинхронне підключення до MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/catdog');
      console.log('MongoDB підключено');
    } catch (err) {
      console.error('Помилка підключення до MongoDB:', err.message);
    }
};

connectDB();

// Налаштування middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Налаштування статичної папки для завантажених зображень
const uploadPath = path.join(__dirname, 'uploads', 'images');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
app.use('/uploads', express.static('uploads'));

// Використання маршрутів для продуктів
app.use('/api/products', productRoutes);

// API-роути
app.get('/example', (req, res) => {
    res.json({ message: 'hi, this is api' });
});

// give React SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'build', 'index.html'));
});

// start serve
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

