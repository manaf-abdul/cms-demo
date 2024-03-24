"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const defaultTheme = {
    colorCode: "e2a300",
};
const appSchema = new mongoose_1.default.Schema({
    theme: {
        type: {
            colorCode: {
                type: String,
                default: defaultTheme.colorCode, // Set the default value for colorCode
            },
        },
        default: defaultTheme, // Set the default value for the entire theme object
        _id: false,
    },
    registrationFlow: [{ type: mongoose_1.default.Types.ObjectId, ref: "Forms" }],
}, {
    versionKey: "version", // Define the name of the version field
    timestamps: true,
});
exports.default = mongoose_1.default.model("App", appSchema);
//# sourceMappingURL=appModel.js.map