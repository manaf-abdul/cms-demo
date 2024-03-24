"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pingController_1 = require("../controllers/pingController");
const router = express_1.default.Router();
router.get("/", pingController_1.ping);
exports.default = router;
//# sourceMappingURL=pingRoutes.js.map