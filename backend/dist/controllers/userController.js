"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFormFlow = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jwt = require("jsonwebtoken");
const getUserFormFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req;
        const flow = yield userModel_1.default.findById(user).populate({
            path: "app",
            populate: {
                path: "registrationFlow",
            },
        });
        res.status(200).json({ data: flow.app.registrationFlow });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.getUserFormFlow = getUserFormFlow;
//# sourceMappingURL=userController.js.map