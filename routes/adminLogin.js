const express = require("express");
const router = express.Router();

const db = require("./db");

router.post("/login", (req,res)=>{

  const { email, password } = req.body;

  const sql = `
    SELECT * FROM admin
    WHERE email = ? AND password = ?
  `;

  db.query(sql,[email,password],(err,result)=>{

    if(err){
      return res.status(500).json({
        success:false,
        msg:"Server Error"
      });
    }

    if(result.length > 0){

      return res.json({
        success:true,
        msg:"Login Success"
      });

    }else{

      return res.json({
        success:false,
        msg:"Invalid Email or Password"
      });

    }

  });

});

module.exports = router;