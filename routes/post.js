const upload = require("../middleware/upload");

const express = require("express");
const router = express.Router();

const db = require("./db");

router.post("/add", upload.single("image"), (req, res) => {

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {

    const {
      productName,
      description,
      price,
      category,
      quantity
    } = req.body;

    // CHECK IMAGE
    if (!req.file) {
      return res.status(400).json({
        msg: "Image not uploaded"
      });
    }

    // IMAGE PATH
    const image = `/uploads/${req.file.filename}`;

    const sql = `
      INSERT INTO products
      (productName, description, image, price, category, quantity)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        productName,
        description,
        image,
        price,
        category,
        quantity
      ],
      (err, result) => {

        if (err) {

          console.log("SQL ERROR:", err);

          return res.status(500).json({
            msg: "Database Error"
          });

        }

        res.status(201).json({
          msg: "Product Added"
        });

      }
    );

  } catch (error) {

    console.log("SERVER ERROR:", error);

    res.status(500).json({
      msg: "Server Error"
    });

  }

});

module.exports = router;