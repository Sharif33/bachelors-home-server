"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReqHouseFromDB = exports.updateReqHouseFieldsInDB = exports.updateReqHouseInDB = exports.createReqHouseInDB = exports.getReqHouseByIdFromDB = exports.getAllUReqHousesFromDB = void 0;
const rh_model_1 = require("./rh.model");
const getAllUReqHousesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.find().sort({ createdAt: -1 });
});
exports.getAllUReqHousesFromDB = getAllUReqHousesFromDB;
const getReqHouseByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.find({ req_house_id: id });
});
exports.getReqHouseByIdFromDB = getReqHouseByIdFromDB;
const createReqHouseInDB = (houseData) => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.create(houseData);
});
exports.createReqHouseInDB = createReqHouseInDB;
const updateReqHouseInDB = (houseId, houseData) => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.findByIdAndUpdate(houseId, houseData, { new: true });
});
exports.updateReqHouseInDB = updateReqHouseInDB;
const updateReqHouseFieldsInDB = (houseId, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.findByIdAndUpdate(houseId, updatedFields, { new: true });
});
exports.updateReqHouseFieldsInDB = updateReqHouseFieldsInDB;
const deleteReqHouseFromDB = (houseId) => __awaiter(void 0, void 0, void 0, function* () {
    return rh_model_1.ReqHouses.findByIdAndDelete(houseId);
});
exports.deleteReqHouseFromDB = deleteReqHouseFromDB;
