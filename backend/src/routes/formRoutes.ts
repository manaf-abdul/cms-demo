import express from "express";
import { addform,editVisbility, getFormById, getForms } from "../controllers/formController";

const router = express.Router();

router.get("/", getForms);
router.get("/:formId", getFormById);
router.post("/", addform);
router.put("/", editVisbility);
// router.delete("/", deleteBus);

export default router;
