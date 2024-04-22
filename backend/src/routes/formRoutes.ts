import express from "express";
import { addform,deleteTarget,editTarget,editVisbility, getFormById, getForms } from "../controllers/formController";

const router = express.Router();

router.get("/", getForms);
router.get("/:formId", getFormById);
router.put("/edit-target", editTarget);
router.put("/delete-target", deleteTarget);
router.post("/", addform);
router.put("/", editVisbility);
// router.delete("/", deleteBus);

export default router;
