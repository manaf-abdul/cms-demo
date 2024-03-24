import { Request, Response } from "express";
import App, { App as AppType } from "../models/appModel";

export const updateApp = async (req: Request, res: Response) => {
  try {
    const { theme, registrationFlow } = req.body;
    if (!registrationFlow.length) {
      throw new Error("Registartion flo should not be emty");
    }
    const newApp = await App.create({ theme, registrationFlow });
    res.status(200).json({ message: "App created successfully", data: newApp });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

export const getAppFLow = async (req: Request, res: Response) => {
  try {
    const latestApp = await App.findOne().sort({ _id: -1 }).populate("registrationFlow").exec()
    res.status(200).json({ message: "Success", data: latestApp });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};
