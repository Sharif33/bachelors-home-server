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
exports.ReqHouseComment = exports.ReqHouses = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Define the schema for IReqHouses
const reqHousesSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
// Create the Mongoose model for IReqHouses
exports.ReqHouses = mongoose_1.default.model("ReqHouses", reqHousesSchema);
const reqHousesCommentsSchema = new mongoose_1.Schema({
    req_house_id: String,
    requester_email: String,
    requester_name: String,
    comments: String,
}, {
    timestamps: true,
});
// Create the Mongoose model for IReqHouses
exports.ReqHouseComment = mongoose_1.default.model("ReqHouseComments", reqHousesSchema);
