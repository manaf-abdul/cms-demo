import mongoose, { Document, Model } from "mongoose";

interface Theme {
  colorCode: string;
}

const defaultTheme: Theme = {
  colorCode: "e2a300",
};

export interface App extends Document {
  theme: Theme;
}

const appSchema = new mongoose.Schema(
  {
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
    registrationFlow: [{ type: mongoose.Types.ObjectId, ref: "Forms" }],
  },
  {
    versionKey: "version", // Define the name of the version field
    timestamps: true,
  }
);

export default mongoose.model<App>("App", appSchema);
