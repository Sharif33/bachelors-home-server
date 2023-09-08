import mongoose, { Document, Schema } from "mongoose";
import { IReqHouses } from "./rh.interface";

// Define the schema for IReqHouses
const reqHousesSchema = new Schema<IReqHouses>(
  {
    req_house_id: String,
    avatar: String,
    email: String,
    name: String,
    gender: String,
    profession: String,
    phone: String,
    houseType: String,
    prferrableRent: Number,
    division: String,
    district: String,
    upazilla: String,
    description: String,
    fromDate: String,
  },
  {
    timestamps: true,
  }
);

// Create the Mongoose model for IReqHouses
export const ReqHouses = mongoose.model<IReqHouses & Document>(
  "ReqHouses",
  reqHousesSchema
);
