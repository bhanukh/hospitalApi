const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }, 
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'PatientDetails',
    }
});

module.exports=mongoose.model('Report', reportSchema);