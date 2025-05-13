import { WaitList } from "../models/waitlist.models.js";
import asyncHandler from "../utils/asyncHandler.js";


const waitlistController = asyncHandler(async(req,res,next)=>{

    console.log(req.body)
    
    const {firstName,lastName,email,interest}  = req.body;

    
    const registerUser = await WaitList.create({
        FirstName:firstName,
        LastName:lastName,
        Email:email,
        Interest:interest

    })

    if(!registerUser){
        res.send("Error Occured")
    }
    else{
        res.send("User registered Successfully")
    }
        

})
export default waitlistController