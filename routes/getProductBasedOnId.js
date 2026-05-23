const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/product/:id", (req, res) => {

  const productId = req.params.id;

  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [productId], (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }

    return res.status(200).json(result);

  });

});

module.exports = router;