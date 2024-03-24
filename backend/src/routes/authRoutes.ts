import express from "express";
import { logIn, signUp } from "../controllers/authController";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", logIn);

export default router;
