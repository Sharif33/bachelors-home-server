"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Houses = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const houseSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.Houses = mongoose_1.default.model("House", houseSchema);
