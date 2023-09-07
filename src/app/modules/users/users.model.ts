import mongoose, { Schema } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema(
  {
    avatar: String,
    birthday: String,
    email: String,
    fullName: String,
    gender: String,
    phone: String,
    division: String,
    district: String,
    upazilla: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model<IUser>("User", userSchema);
