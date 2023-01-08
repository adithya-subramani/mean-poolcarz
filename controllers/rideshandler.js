const fs = require('fs');
const arr = require('../model/model');
const mride=arr[0];
exports.addRide = async(req,res)=>{
    try{
        const aRide = req.body;
        const newRide = await mride.create(aRide);
        console.log(newRide);
        res.status(201).json({
            status:"success",
            data:{newRide}
        });
    }
    catch(err){
        res.send(404).json({
            status:"fail",
            message:err.message
        })
    }
}

exports.getRides= async (req,res)=>{
    try{
        const rides=await mride.find({},{_id:0,__v:0});
        console.log(rides);
        if(rides.length>0){
            return res.status(200).json(rides);
        }
        else{
            return res.status(400).json({
                status:"success",
                result:"no data to get"
            });
        }
    }
    catch(err){
        return res.status(404).json({
            status:"fail",
            message:err.message
        })
    }
}

exports.updateRide=async (req,res)=>{
    console.log(3);
    try{
        console.log(req.body);
        console.log(req.params.id);
        const uRide=await mride.findOneAndUpdate({id:req.params.id},req.body,{
            new:true,
            runValidators:true,
        });

        if(uRide!=null){
            res.status(200).json({
                status:"success",
                result:uRide.length,
                data:{uRide}
            });
        }
        else{
            res.status(400).json({
                status:"success",
                result:"no ride available with the id to update"
            });
        }
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err.message
        })
    }
}