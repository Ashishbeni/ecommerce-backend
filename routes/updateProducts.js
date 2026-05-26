const express = require("express");

const router = express.Router();

const db = require("./db");

router.put("/updateProducts/:id", (req, res) => {

  const { id } = req.params;

  const {
    productName,
    description,
    image,
    price,
    category,
    quantity
  } = req.body;

  const sql = `
    UPDATE products
    SET
      productName = ?,
      description = ?,
      image = ?,
      price = ?,
      category = ?,
      quantity = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      productName,
      description,
      image,
      price,
      category,
      quantity,
      id
    ],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          msg: "Internal server error"
        });

      }

      return res.status(200).json({
        msg: "Product updated successfully"
      });

    }
  );

});

module.exports = router;