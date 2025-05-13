import mongoose from "mongoose";


const waitlistSchema  = new mongoose.Schema({

    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Interest:{
        type:String
    }

},{timestamps:true})


export const WaitList = mongoose.model("Waitlist",waitlistSchema)
