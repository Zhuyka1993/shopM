const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/product');
const path = require('path');

// Налаштування для multer (для завантаження файлів)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images'); // Вказуємо папку для збереження завантажених зображень
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`); // Вказуємо ім'я файлу
  }
});

const upload = multer({ storage: storage });

// Маршрут для створення нового продукту
router.post('/add', upload.single('image'), async (req, res) => {
  const { title, description, price } = req.body;
  const imageUrl = path.join('uploads/images', req.file.filename);

  try {
    const newProduct = new Product({
      title,
      description,
      price,
      imageUrl
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Щось пішло не так' });
  }
});

// Маршрут для отримання всіх продуктів
 router.get('/', async (req, res) => {
   try
    { const products = await Product.find();
   res.status(200).json(products);
   } catch (error) {
     res.status(500).json({ error: 'Щось пішло не так' }); } });

module.exports = router;
