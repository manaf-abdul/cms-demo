import mongoose from "mongoose";

export interface IdPayload {
  _id: mongoose.Schema.Types.ObjectId | string;
}
