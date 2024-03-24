import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const { JWT_KEY } = process.env;

// Augment the Request interface
declare global {
  namespace Express {
    interface Request {
      user?: any; // Define the custom property
    }
  }
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, JWT_KEY);
    req.user = decoded.id;
    next();
  } catch (error) {
    console.log("error", error);
    return res.status(401).json({ message: "Unauthorized Access", data: null });
  }
};
