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
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        default: null,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        default: null,
        validate: {
            validator: function (v) {
                return v && v.length >= 5; // Minimum length validation
            },
            message: "Password must be at least 8 characters long",
        },
    },
    gender: { type: String, default: null },
    dob: { type: String, default: null },
    phoneNo: { type: String, default: null },
    city: { type: String, default: null },
    country: { type: String, default: null },
    highschool: { type: String, default: null },
    highersecondary: { type: String, default: null },
    college: { type: String, default: null },
    profession: { type: String, default: null },
    totalYearOfExperience: { type: String, default: null },
    professionalCategory: { type: String, default: null }, // Fixed typo in property name
    currentCompany: { type: String, default: null }, // Fixed typo in property name
    app: { type: mongoose_1.default.Types.ObjectId, ref: "App" },
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password")) {
            next();
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
    });
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=userModel.js.map