import express from "express";
import { updateApp,getAppFLow } from "../controllers/appControler";

const router = express.Router();

router.post("/", updateApp);
router.get("/", getAppFLow);

export default router;
