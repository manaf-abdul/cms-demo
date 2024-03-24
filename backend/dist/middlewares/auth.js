"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_KEY } = process.env;
const protect = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, JWT_KEY);
        req.user = decoded.id;
        next();
    }
    catch (error) {
        console.log("error", error);
        return res.status(401).json({ message: "Unauthorized Access", data: null });
    }
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map