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

// // Асинхронне підключення до MongoDB
// const connectDB = async () => {
//     try {
//       await mongoose.connect('mongodb+srv://CatDog:5195454Qq@catdog.my02agn.mongodb.net/catdog?retryWrites=true&w=majority&appName=CatDog');
//       console.log('MongoDB підключено');
//     } catch (err) {
//       console.error('Помилка підключення до MongoDB:', err.message);
//     }
// };

// connectDB();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://CatDog:5195454Qq@catdog.my02agn.mongodb.net/";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

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

