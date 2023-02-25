import express from "express"
import mongoose  from "mongoose"
import morgan from "morgan"
import cors from "cors"
import fanroute from "./Routes/Fan.rout.js"
import matchroute from "./Routes/Match.rout.js"
const app =express();

const hostname="127.0.0.1"
const port = process.env.port || 9090 // || = OU logique 



const dabasename = "revision2cinfo1"
mongoose.connect(`mongodb://127.0.0.1:27017/${dabasename}`)
.then(()=>{
    console.log(`connected to ${dabasename}`);
})
.catch(err =>{
    console.log(err)
})

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use("/Fan",fanroute)
app.use("/match",matchroute)
app.listen(port, hostname,()=>{
    console.log(`server running  ${hostname}:${port}`);
})

