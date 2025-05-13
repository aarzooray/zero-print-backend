import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))


dotenv.config({
    path:"../.env"
})


app.use(express.json({limit:"17Kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

import waitListRouter from "./routes/waitlist.routes.js"

app.use('/waitlist',waitListRouter)

export {app}