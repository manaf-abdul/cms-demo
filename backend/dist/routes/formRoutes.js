"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formController_1 = require("../controllers/formController");
const router = express_1.default.Router();
router.get("/", formController_1.getForms);
router.get("/:formId", formController_1.getFormById);
router.post("/", formController_1.addform);
router.put("/", formController_1.editVisbility);
// router.delete("/", deleteBus);
exports.default = router;
//# sourceMappingURL=formRoutes.js.map