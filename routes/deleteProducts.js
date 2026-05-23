const express = require("express");
const router = express.Router();
const db = require("./db");

router.delete("/delete-product/:id", (req, res)=>{
    const deleteData = req.params.id;

    const sql = `DELETE from products WHERE id =?`;

    db.query(sql, [deleteData], (err, result)=>{
        if(err){
          console.log(err);
          return res.status(500).json("Internal server error.")
        }else{
          return res.status(200).json({msg:"Product deleted successfully", result})
        }
    })

})

module.exports = router;