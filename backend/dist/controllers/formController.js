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
exports.getFormById = exports.getForms = exports.editVisbility = exports.addform = void 0;
const formModel_1 = __importDefault(require("../models/formModel"));
const addform = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const form = req.body;
        let newForm = new formModel_1.default(form);
        newForm = yield newForm.save();
        res.status(201).json({ data: newForm });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.addform = addform;
const editVisbility = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formId, fieldId, visibility } = req.body;
        const result = yield formModel_1.default.findOneAndUpdate({ _id: formId, "formFields._id": fieldId }, { $set: { "formFields.$.visibility": visibility } }, { new: true });
        res.status(200).json({ data: result });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.editVisbility = editVisbility;
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let forms = yield formModel_1.default.find({});
        res.status(200).json({ data: forms });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.getForms = getForms;
const getFormById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formId } = req.params;
        const form = yield formModel_1.default.findById(formId);
        res.status(200).json({ data: form });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json(error);
    }
});
exports.getFormById = getFormById;
//# sourceMappingURL=formController.js.map