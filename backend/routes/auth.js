console.log("I have been called");
const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("I am auth.js");
})

module.exports =router;