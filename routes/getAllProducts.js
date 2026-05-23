const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/allProducts", (req,res)=>{

   const sql = `SELECT * FROM products`;

   db.query(sql, (err, result)=>{

      if(err){
         console.log(err);
         return res.status(500).json({
            msg:"Internal server error"
         });
      }

      return res.status(200).json(result);

   });

});

module.exports = router;