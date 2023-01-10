const mongoose = require('mongoose');

// User Schema or Document Structure
const G1Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    G1Overview : {
        type : String,
        required : false,                
    },
    P1: {
        type: String,
        required: false    
    },
    P2 :{
        type: String,
        required: false
    },
    Exam1:{
        type : String,
        required : false
    },
    Exam2:{
        type : String,
        required : false
    },
    Exam3:{
        type : String,
        required : false
    },
    Final:{
        type : String,
        required : false
    }
})


//Create Model
const G1Data = new mongoose.model("G1Data", G1Schema);

module.exports = G1Data;