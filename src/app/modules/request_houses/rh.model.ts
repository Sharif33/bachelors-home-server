import mongoose, { Document, Schema } from "mongoose";
import { IReqHouses, IReqHousesComments } from "./rh.interface";

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

const reqHousesCommentsSchema = new Schema<IReqHousesComments>(
  {
    req_house_id: String,
    requester_email: String,
    requester_name: String,
    comments: String,
  },
  {
    timestamps: true,
  }
);

// Create the Mongoose model for IReqHouses
export const ReqHouseComment = mongoose.model<IReqHousesComments & Document>(
  "ReqHouseComments",
  reqHousesSchema
);
