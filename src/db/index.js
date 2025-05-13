import asyncHandler from "../utils/asyncHandler.js";
import mongoose from "mongoose"
import { app } from "../app.js";
import { error } from "console";


const dbConnection = async()=>{

    try{

        const connInstance = await mongoose.connect("mongodb+srv://zeroprint:zeroprint9827@waitlistdata.8ei5kco.mongodb.net/?retryWrites=true&w=majority&appName=waitlistData")

        app.on(error,(req,res,err)=>{
            console.log("DB not able to Communicate",err)
        })
        console.log("DB Connected Successfully!")
    }
    catch(err){
        console.log("ERROR in Db Folder",err)
        process.exit(1)
    }



}
export default dbConnection
