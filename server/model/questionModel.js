import mongoose from "mongoose";

const qschema = new mongoose.Schema({
    qnumber:{
        type: Number,
        required:true
    },
    qcontent:{
        type:String,
        required:true
    },
    options:{
        type:[String],
        required:true
    },
    correctopt:{
        type: Number,
        required:true
    }
})



export default mongoose.model("Questions",qschema);