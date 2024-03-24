import { Request, Response } from "express";
import User, { User as UserType } from "../models/userModel";
const jwt = require("jsonwebtoken");
import App, { App as AppType } from "../models/appModel";
import generateToken from "../services/jwt";
import bcrypt from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const latestApp = await App.findOne()
      .sort({ _id: -1 })
      .populate("registrationFlow")
      .exec();
    let newUser: any = new User({ email, password, app: latestApp._id });
    newUser = await newUser.save();
    const token = generateToken(newUser._id);
    const user: any = { ...newUser._doc, password: null, token };
    res.status(201).json({ data: user, message: "success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await User.findOne({ email })
      .select("email password app")
      .populate("app");
    if (!user) {
      return res.status(401).json({ message: "User Not found" });
    }
    const cmpPass = await bcrypt.compare(password, user.password);
    if (!cmpPass) {
      return res.status(401).json({
        message: "Incorrect Password.",
        data: null,
      });
    }
    const token = generateToken(user._id);
    const sanitizedUser: any = { ...user._doc, password: undefined, accessToken:token };
    res.status(201).json({ data: sanitizedUser, message: "success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
