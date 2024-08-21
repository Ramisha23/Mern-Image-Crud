const express = require("express");

const app = express();

const dotenv=require("dotenv").config();

app.listen(process.env.Port,()=>{
    console.log(`Server is running on port ${process.env.Port}`)
})