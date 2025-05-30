import express from "express"
const app=express()
import dotenv from 'dotenv'
import cors from 'cors';
import router from "./Routes/AdminRoutes.js"
dotenv.config()
import { connectDB } from "./config/db.js"
connectDB()

const corsOptions = {
  origin: [
    'http://localhost:4000',
    'http://localhost:3000',
    'https://arc-trackr-mu.vercel.app',
    'https://arctrackr-v71m.onrender.com'
  ],
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};
app.use(cors(corsOptions));

const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin",router)

app.get("/",(req,res)=>res.send("server is ready"))
app.listen(port,()=>console.log("server started"))