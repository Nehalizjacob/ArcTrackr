import express from "express"
import { addSiteVisit, adminlogin, deleteSiteVisit, editSiteVisit, getAllSiteVisit, getSiteVisitById, register } from "../Controller/AdminController.js"
const router = express.Router()

router.post("/adminregister",register)
router.post("/admin",adminlogin)
router.post("/addsitevisit",addSiteVisit)
router.get("/getallsitevisits",getAllSiteVisit)
router.get("/getallsitevisit1/:id", getSiteVisitById);
router.put("/editsitevisit/:id", editSiteVisit);
router.delete("/deletesitevisit/:id",deleteSiteVisit );
export default router