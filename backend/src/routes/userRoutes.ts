import express from "express";
import { getUserFormFlow } from "../controllers/userController";
import { protect } from "../middlewares/auth";

const router = express.Router();

router.get("/form", protect, getUserFormFlow);

export default router;
