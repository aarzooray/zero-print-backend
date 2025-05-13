import { app } from "./app.js";
import dbConnection from "./db/index.js";



dbConnection()
.then(()=>{

        app.get('/',(req,res)=>{
            res.send("Backend")
        })
        app.listen(process.env.PORT || 2300,(req,res)=>{
            console.log(`Server is running at http://localhost:${process.env.PORT}/`)
        })
    
    
})
.catch((err)=>{
    console.log("Couldn't connect to Database..")
})