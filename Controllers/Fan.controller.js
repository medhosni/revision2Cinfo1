
import { validationResult } from "express-validator";
import Fan from "../Models/Fan.model.js"


export function addFan(req,res){
if (validationResult(req).isEmpty()){


const fan = new Fan({
    fullname : req.body.fullname,
    phone:req.body.phone,
    team : req.body.team,
    image : `${req.protocol}://${req.get("host")}/img/${req.file.filename}`
})
fan.save()
.then(newfan=>{
    res.status(201)
    .json({
        fullname:newfan.fullname,
        team:newfan.team,
        phone:newfan.phone,
        image:newfan.image
        })
})
.catch(err => {
    res.status(500).json({Message :"problème au niveau du serveur"})
})
}else{
    res.status(400).json(validationResult(req).array())
}
}

export function getFan(req,res){
    Fan.find({team:req.params.team})
    .then(fans =>{
        res.status(200).json(fans)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
}
