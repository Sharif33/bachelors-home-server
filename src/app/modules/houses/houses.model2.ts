import mongoose, { Schema } from "mongoose";
import { IHouses } from "./houses.interface1";

const houseSchema = new Schema(
  {
    images: [String],
    houseType: String,
    availableFrom: String,
    houseSize: Number,
    houseRent: Number,
    rentNegotiable: Boolean,
    serviceCharge: Number,
    bedRoom: Number,
    bathRoom: Number,
    kitchen: Number,
    balcony: Number,
    floor: Number,
    floorType: String,
    diningSpace: Number,
    attachedWashroom: Boolean,
    lift: Boolean,
    parking: Boolean,
    generator: Boolean,
    security: Boolean,
    cctv: Boolean,
    wifi: Boolean,
    gasBill: Number,
    gasFacility: String,
    water: Boolean,
    electricity: String,
    electricityBill: String,
    description: String,
    contactNo: String,
    contactEmail: String,
    contactAddress: String,
    contactName: String,
    preferredGender: String,
    location: {
      division: String,
      district: String,
      upazilla: String,
      address: String,
      googleMapLink: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Houses = mongoose.model<IHouses>("House", houseSchema);
