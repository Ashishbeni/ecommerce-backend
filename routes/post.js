const express = require("express");
const router = express.Router();

const db = require("./db");

const upload = require("../middleware/upload");

router.post("/add", upload.single("image"), (req, res) => {

  try {

    const {
      productName,
      description,
      price,
      category,
      quantity
    } = req.body;

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

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
          console.log(err);

          return res.status(500).json({
            msg: "Database Error"
          });
        }

        res.status(201).json({
          msg: "Product Added",
          image
        });

      }
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      msg: "Server Error"
    });

  }

});

module.exports = router;