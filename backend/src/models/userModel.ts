import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface User extends Document {
  email: string;
  password: string;
  gender: string;
  dob?: string;
  phoneNo?: string;
  city?: string;
  country?: string;
  highschool?: string;
  highersecondary?: string;
  college?: string;
  profession?: string;
  totalYearOfExperience?: string;
  professionalCategory?: string; // Fixed typo in property name
  currentCompany?: string; // Fixed typo in property name
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    default: null,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    default: null,
    validate: {
      validator: function (v: any) {
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
  app: { type: mongoose.Types.ObjectId, ref: "App" },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model<User>("User", userSchema);
