import express from "express"
import { adminlogin, register } from "../Controller/AdminController.js"
const router = express.Router()

router.post("/adminregister",register)
router.post("/admin",adminlogin)

export default router