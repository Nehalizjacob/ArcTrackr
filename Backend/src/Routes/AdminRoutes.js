import express from "express"
import { addSiteVisit, adminlogin, getAllSiteVisit, register } from "../Controller/AdminController.js"
const router = express.Router()

router.post("/adminregister",register)
router.post("/admin",adminlogin)
router.post("/addsitevisit",addSiteVisit)
router.get("/getallsitevisits",getAllSiteVisit)

export default router