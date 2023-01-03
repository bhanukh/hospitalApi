const jwt =require('jsonwebtoken');

const Doctor= require('../models/doctorSchema');

module.exports.login =async function(req, res) {
    try {
        let user = await Doctor.findOne({email: req.body.email , password: req.body.password});
        if (user) {
            return res.status(200).json({
                message: "token created successfuly",
                data:{
                    token: jwt.sign(user.toJSON(), 'EncryptionKey', {
                        expiresIn:100000000
                    }),
                }
            })
            
        }else{
            return res.status(422).json({
                message:"invalid username/password"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message:err
        });
        
    }
    
}