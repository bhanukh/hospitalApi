const Doctor= require('../models/doctorSchema');

const Patient = require('../models/PatientSchema');

module.exports.doctor = async function(req, res){
    try {
        let user = await Doctor.create(req.body);
        console.log(user.data);
        return res.status(200).json({
            message: 'user created'
        }) ;
       } catch (err) {
        console.log("error while creating user", err);
        return res.status(500).json({
            message :err
        });
    }
}



module.exports.patient = async function(req,res){
    try {
        let verify = await Patient.findOne({PhoneNo: req.body.PhoneNo}).populate('doctor').exec();
        if(verify){
            return res.status(409).json({
                message: "phone number already exists",
                data: verify,
            })
        }
      
        let user= await Patient.create({
            PhoneNo: req.body.PhoneNo,
            name: req.body.name, doctor :req.user._id
        });
        return res.status(200).json({
            message:"user created",
            data:{
                patientId: user._id
            }
        });

    } catch (err) {
        return res.status(500).json({
            message:err
        });
        
    }
}