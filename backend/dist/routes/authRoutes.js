"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/sign-up", authController_1.signUp);
router.post("/login", authController_1.logIn);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map