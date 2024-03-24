import { Request, Response } from "express";
import User, { User as UserType } from "../models/userModel";
const jwt = require("jsonwebtoken");
import App, { App as AppType } from "../models/appModel";
import generateToken from "../services/jwt";
import bcrypt from "bcryptjs";

export const getUserFormFlow = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const flow: any = await User.findById(user).populate({
      path: "app",
      populate: {
        path: "registrationFlow",
      },
    });
    res.status(200).json({ data: flow.app.registrationFlow });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};
