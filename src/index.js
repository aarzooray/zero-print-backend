import { app } from "./app.js";
import dbConnection from "./db/index.js";


const PORT = 3400
dbConnection()
.then(()=>{

        app.get('/',(req,res)=>{
            res.send("jo")
        })
        app.listen(PORT,(req,res)=>{
            console.log(`Server is running at http://localhost:${PORT}/`)
        })
    
    
})
.catch((err)=>{
    console.log("Couldn't connect to Database..")
})