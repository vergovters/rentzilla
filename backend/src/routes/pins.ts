import express from "express";
import PinController from "../controllers/PinController"

const router = express.Router()
router.post("/", PinController.createPin);
  
router.get("/", PinController.getPin);
  
export default router;