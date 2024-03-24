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
exports.getAppFLow = exports.updateApp = void 0;
const appModel_1 = __importDefault(require("../models/appModel"));
const updateApp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { theme, registrationFlow } = req.body;
        if (!registrationFlow.length) {
            throw new Error("Registartion flo should not be emty");
        }
        const newApp = yield appModel_1.default.create({ theme, registrationFlow });
        res.status(200).json({ message: "App created successfully", data: newApp });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.updateApp = updateApp;
const getAppFLow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const latestApp = yield appModel_1.default.findOne().sort({ _id: -1 }).populate("registrationFlow").exec();
        res.status(200).json({ message: "Success", data: latestApp });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.getAppFLow = getAppFLow;
//# sourceMappingURL=appControler.js.map