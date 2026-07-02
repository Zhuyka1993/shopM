const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/product");
const path = require("path");
const { requireAuth, requireAdmin } = require("../middleware/auth");

console.log("PRODUCT ROUTER FILE LOADED");

// 📦 multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

/* =========================================================
   🔥 1. ВАЖЛИВО: ДИНАМІЧНІ РОУТИ СТАВИМО ПЕРШИМИ
========================================================= */


// DELETE
router.delete(
  "/:id",
  requireAuth,
  requireAdmin,
  async (req, res) => {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product deleted" });
    } catch (err) {
      res.status(500).json({ message: "Delete error" });
    }
  }
);

// UPDATE
router.put(
  "/:id",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, description, price, type } = req.body;

      const updateData = { title, description, price, type };

      if (req.file) {
        updateData.imageUrl = `uploads/images/${req.file.filename}`;
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: "Update error" });
    }
  }
);

/* =========================================================
   🔹 2. CREATE
========================================================= */

router.post(
  "/add",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  async (req, res) => {
    const { title, description, price, type } = req.body;

    const imageUrl = req.file
      ? path.join("uploads/images", req.file.filename)
      : null;

    try {
      const newProduct = new Product({
        title,
        description,
        price,
        imageUrl,
        type,
      });

      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Щось пішло не так" });
    }
  }
);

/* =========================================================
   🔹 3. FILTER ROUTES
========================================================= */

router.get("/sleep", async (req, res) => {
  try {
    const products = await Product.find({ type: "Sleep" });
    res.json(products);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/wear", async (req, res) => {
  try {
    const products = await Product.find({ type: "Belt" });
    res.json(products);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/bones", async (req, res) => {
  try {
    const products = await Product.find({ type: "Bones" });
    res.json(products);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

/* =========================================================
   🔹 4. GET ALL (ОСТАННІЙ!)
========================================================= */

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch {
    res.status(500).json({ error: "Щось пішло не так" });
  }
});

module.exports = router;