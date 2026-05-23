const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/product-by-category", (req, res) => {

  const sql = `SELECT * FROM products`;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        msg: "Internal server error."
      });

    }

    const groupedProducts = {};

    result.forEach((product) => {

      const category = product.category;

      if (!groupedProducts[category]) {

        groupedProducts[category] = [];

      }

      groupedProducts[category].push(product);

    });

    res.status(200).json(groupedProducts);

  });

});

module.exports = router;