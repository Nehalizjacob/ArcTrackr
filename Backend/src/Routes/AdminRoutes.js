import express from "express"
import { register } from "../Controller/AdminController.js"
const router = express.Router()

router.post("/register",register)

export default router