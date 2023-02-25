import mongoose from "mongoose";

const {Schema ,model} = mongoose

const schemaMatch =Schema({
    date:{
        type :String ,
        require:true
    },
    teamHome:String ,
    teamAway:String ,
    nbrPlace: Number


},{timestamps:true})

export default model ("Match",schemaMatch)