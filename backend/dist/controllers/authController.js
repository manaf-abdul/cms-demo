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
exports.logIn = exports.signUp = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jwt = require("jsonwebtoken");
const appModel_1 = __importDefault(require("../models/appModel"));
const jwt_1 = __importDefault(require("../services/jwt"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const latestApp = yield appModel_1.default.findOne()
            .sort({ _id: -1 })
            .populate("registrationFlow")
            .exec();
        let newUser = new userModel_1.default({ email, password, app: latestApp._id });
        newUser = yield newUser.save();
        const token = (0, jwt_1.default)(newUser._id);
        const user = Object.assign(Object.assign({}, newUser._doc), { password: null, token });
        res.status(201).json({ data: user, message: "success" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email })
            .select("email password app")
            .populate("app");
        if (!user) {
            return res.status(401).json({ message: "User Not found" });
        }
        const cmpPass = yield bcryptjs_1.default.compare(password, user.password);
        if (!cmpPass) {
            return res.status(401).json({
                message: "Incorrect Password.",
                data: null,
            });
        }
        const token = (0, jwt_1.default)(user._id);
        const sanitizedUser = Object.assign(Object.assign({}, user._doc), { password: undefined, accessToken: token });
        res.status(201).json({ data: sanitizedUser, message: "success" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
exports.logIn = logIn;
//# sourceMappingURL=authController.js.map