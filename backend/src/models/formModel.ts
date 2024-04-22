import mongoose, { Document, Schema } from "mongoose";

interface FormField {
  name: string;
  label: string;
  type: string;
  rules?: Record<string, any>;
  props?: Record<string, any>;
  visibility: boolean;
}

export interface Forms extends Document {
  formName: string;
  formFields: FormField[];
}

const formFieldSchema = new Schema(
  {
    name: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, required: true },
    rules: { type: Schema.Types.Mixed },
    props: { type: Schema.Types.Mixed },
    options: { type: Schema.Types.Mixed },
    visibility: { type: Boolean, required: true, default: true },
  },
  { _id: true }
);

const formsSchema = new Schema(
  {
    formName: {
      type: String,
      required: false,
      unique: true
    },
    source: {
      type: mongoose.Types.ObjectId, ref: "Forms",
      required: true,
    },
    target: {
      type: mongoose.Types.ObjectId, ref: "Forms",
      required: true,
    },
    formFields: [formFieldSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Forms", formsSchema);
