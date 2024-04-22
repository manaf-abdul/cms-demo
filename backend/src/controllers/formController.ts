import { Request, Response } from "express";
import Form, { Forms as FormType } from "../models/formModel";

export const addform = async (req: Request, res: Response) => {
  try {
    const form = req.body;
    let newForm = new Form(form);
    newForm = await newForm.save();
    res.status(201).json({ data: newForm });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const editVisbility = async (req: Request, res: Response) => {
  try {
    const { formId, fieldId, visibility } = req.body;
    const result = await Form.findOneAndUpdate(
      { _id: formId, "formFields._id": fieldId },
      { $set: { "formFields.$.visibility": visibility } },
      { new: true }
    );
    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const getForms = async (req: Request, res: Response) => {
  try {
    let forms = await Form.find({});
    res.status(200).json({ data: forms });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const getFormById = async (req: Request, res: Response) => {
  try {
    const { formId } = req.params;
    const form = await Form.findById(formId);
    res.status(200).json({ data: form });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const editTarget = async (req: Request, res: Response) => {
  try {
    const { _id, target, source } = req.body;
    const myresult = await Form.findOneAndUpdate(
      { target: target },
      { $unset: { target: "" } },
      { new: true }
    );
    const result = await Form.findOneAndUpdate(
      { _id: _id },
      { $set: { target: target, source: source } },
      { new: true }
    );
    console.log(result)
    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const deleteTarget = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const result = await Form.findOneAndUpdate(
      { _id: _id },
      { $unset: { source: "" } },
      { new: true }
    );
    console.log(result)
    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};