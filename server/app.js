import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import { connectedb } from "./database";




// middlewares
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended : true}));

// app.use(cors())


const app = express();

//connectedb();


app.listen(4000,()=>{
    console.log("server is running fine");
})

export default app;
