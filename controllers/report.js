const Patient = require('../models/PatientSchema');

const Report = require('../models/reportSchema');

module.exports.createReport = async function(req,res){
    try {
        let patient = await Patient.findById(req.params.id);
        let reports = await Report.create({
            status:req.body.status,
            date:`${new Date(Date.now()).toLocalDateString().toString()}`,
            patient: req.params.id
        });
        console.log(reports);
        await patient.report.push(reports);
        await patient.save();
        return res.status(200).json({
            message: "report created successfully"
        });

    } catch (err) {
        res.status(500).json({
            message:err
        });
    }
}


module.exports.allReports =  async function(req,res){
    try {
        let patient = await Patient.findById(req.params.id).populate('report').exec();
        return res.status(200).json({
            message: "all report generated till now",
            data: patient.report,
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
}


module.exports.statusVise=  async function(req,res){
    try {
        let reports = await Report.find({status: req.params.status}).populate(patient).exec();
        return res.status(200).json({
            message:" status generated",
            data: reports
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
}