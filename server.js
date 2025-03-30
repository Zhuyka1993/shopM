const express = require("express");
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();

// Middleware for JSON
app.use(express.json());

// Визначаємо середовище
const isDevelopment = process.env.NODE_ENV !== "production";

// 🔥 Підключення MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://CatDog:5195454Qq@catdog.my02agn.mongodb.net/catdog?retryWrites=true&w=majority&appName=CatDog",
      {
        serverSelectionTimeoutMS: 10000,
      }
    );
    console.log("✅ MongoDB підключено");
  } catch (err) {
    console.error("❌ Помилка підключення до MongoDB:", err.message);
  }
};

connectDB();

// 📦 Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 📁 Завантаження зображень
const uploadPath = path.join(__dirname, "uploads", "images");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
app.use("/uploads", express.static("uploads"));

// 📦 API-маршрути
app.use("/api/products", productRoutes);
app.get("/example", (req, res) => {
  res.json({ message: "hi, this is api" });
});

// ⚙️ Webpack Dev Middleware (DEV)
if (isDevelopment) {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

// 🚀 React SPA (PROD)
if (!isDevelopment) {
  const buildPath = path.join(__dirname, "view", "build");

  // Видача статичних файлів React
  app.use(express.static(buildPath));

  // SPA fallback для React Router
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
