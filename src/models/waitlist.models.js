import mongoose from "mongoose";
import { timestamp } from "rxjs";

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