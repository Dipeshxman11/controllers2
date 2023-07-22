const path = require("path");

const express=require('express');

const router=express.Router();

const fs=require('fs');

const { get } = require('http');

router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        console.log(typeof(data));
        
        res.sendFile(path.join(__dirname, "./",  "views", "send.html"));
    })
    
})
router.post('/',(req,res,next)=>{

    fs.writeFile("username.txt" , `${" " + req.body.username }:${req.body.message}`, {flag:"a"},(err)=>{
        err ? console.log(err) :    res.redirect('/');
    })
})
module.exports=router;