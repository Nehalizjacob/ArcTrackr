import express from "express"
const app=express()
import dotenv from 'dotenv'
import router from "./Routes/AdminRoutes.js"
dotenv.config()
import { connectDB } from "./config/db.js"
connectDB()

const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin",router)

app.get("/",(req,res)=>res.send("server is ready"))
app.listen(port,()=>console.log("server started"))