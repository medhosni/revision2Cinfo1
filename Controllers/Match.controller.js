import Match from "../Models/Match.model.js"
import {validationResult} from "express-validator"


export function addMAtch(req,res){
    if (validationResult(req).isEmpty()){
    Match.create({...req.body})
    .then(newmatch => {
        res.status(201).json({
            date : newmatch.date,
            teamHome : newmatch.teamHome,
            teamAway : newmatch.teamAway,
            nbrPlace : newmatch.nbrPlace
        })
    })
    .catch(err => {
        res.status(500).json({Message :"problème au niveau du serveur"})
    })
}else {
    res.status(406).json(validationResult(req).array())
}

}

export function getAllMatchs(req,res){
    Match.find({})
    .then(docs => {
        res.status(201).json(docs)
    })
    .catch(err => {
        res.status(500).json({Message :"problème au niveau du serveur"})
    })
}

export function patchMatch(req,res){
    if (validationResult(req).isEmpty()){
     
        Match.findByIdAndUpdate(req.params.id,{date :req.body.date})
        .then(updated => {
            res.status(201).json(updated)
        })
        .catch(err => {
            res.status(500).json({Message :"problème au niveau du serveur"})
        })
    }else{ res.status(400).json(validationResult(req).array())}

}