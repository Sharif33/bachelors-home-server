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
exports.deleteHouseFromDB = exports.updateHouseFieldsInDB = exports.updateHouseInDB = exports.createHouseInDB = exports.getHouseByIdFromDB = exports.getAllHousesFromDB = void 0;
const houses_model2_1 = require("./houses.model2");
const getAllHousesFromDB = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const query = houses_model2_1.Houses.find();
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            query.where(key).equals(filters[key]);
        }
    }
    return query.sort({ createdAt: -1 });
});
exports.getAllHousesFromDB = getAllHousesFromDB;
const getHouseByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return houses_model2_1.Houses.find({ _id: id });
});
exports.getHouseByIdFromDB = getHouseByIdFromDB;
const createHouseInDB = (houseData) => __awaiter(void 0, void 0, void 0, function* () {
    return houses_model2_1.Houses.create(houseData);
});
exports.createHouseInDB = createHouseInDB;
const updateHouseInDB = (houseId, houseData) => __awaiter(void 0, void 0, void 0, function* () {
    return houses_model2_1.Houses.findByIdAndUpdate(houseId, houseData, { new: true });
});
exports.updateHouseInDB = updateHouseInDB;
const updateHouseFieldsInDB = (houseId, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    return houses_model2_1.Houses.findByIdAndUpdate(houseId, updatedFields, { new: true });
});
exports.updateHouseFieldsInDB = updateHouseFieldsInDB;
const deleteHouseFromDB = (houseId) => __awaiter(void 0, void 0, void 0, function* () {
    return houses_model2_1.Houses.findByIdAndDelete(houseId);
});
exports.deleteHouseFromDB = deleteHouseFromDB;
