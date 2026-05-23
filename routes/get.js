const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/drink", (req,res)=>{

  const sql = `SELECT * FROM products WHERE category='Drink'`;

  db.query(sql,(err,result)=>{

    if(err){
      return res.status(500).json(err);
    }

    return res.json(result);

  });

});

module.exports = router;