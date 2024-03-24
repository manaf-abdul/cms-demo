"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appControler_1 = require("../controllers/appControler");
const router = express_1.default.Router();
router.post("/", appControler_1.updateApp);
router.get("/", appControler_1.getAppFLow);
exports.default = router;
//# sourceMappingURL=appRoutes.js.map