import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";



const app = express();

app.listen(4000,()=>{
    console.log("server is running fine")
})

module.exports =app;
