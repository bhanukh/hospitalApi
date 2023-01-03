const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    PhoneNo:{
        type:String,
        required:true,
    },
    report:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Report',
    }], 
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'DoctorDetails'
    },
    name:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('Patient', patientSchema);