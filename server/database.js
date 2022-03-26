const mongoose = require("mongoose");

exports.connectedb = ()=>{
    mongoose.connect('mongodb://localhost:27017/memories-app');
}