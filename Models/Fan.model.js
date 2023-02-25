import mongoose from "mongoose";
const {Schema,model} = mongoose;
const schemaFan = new Schema({
    fullname:{
        type :String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    team:{
        type:String ,
        require:true
    },
    image :{
        type : String ,
        require:true
    }

},
{timestamps:true}

)


export default model("Fan",schemaFan);