const express = require("express");
const router = express.Router();

const db = require("./db");

router.post("/add", (req, res) => {

  const {
    productName,
    description,
    image,
    price,
    category,
    quantity
  } = req.body;

  const sql = `
    INSERT INTO products
    (productName, description, image, price, category, quantity)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [productName, description, image, price, category, quantity],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json({
          msg: "Error"
        });
      }

      res.status(201).json({
        msg: "Product Added"
      });

    }
  );

});

module.exports = router;