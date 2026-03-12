import express from "express";
import { postContactUs } from "../controller/contactUs.controller.js";

const router = express.Router();

router.post("/", postContactUs);

export default router;