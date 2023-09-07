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
exports.deleteHouse = exports.updateHouseFields = exports.updateHouse = exports.createHouse = exports.getHouseById = exports.getAllHouse = void 0;
const houses_model2_1 = require("./houses.model2");
const houses_service3_1 = require("./houses.service3");
const getAllHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = req.query;
        const houses = yield (0, houses_service3_1.getAllHousesFromDB)(filters);
        res.send(houses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllHouse = getAllHouse;
const getHouseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const house = yield (0, houses_service3_1.getHouseByIdFromDB)(id);
        if (!house) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(house);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getHouseById = getHouseById;
const createHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the latest house in the database
        const latestHouse = yield houses_model2_1.Houses.findOne({}, {}, { sort: { house_id: -1 } });
        let newHouseData;
        if (latestHouse) {
            // If there is a latest house, increment its house_id
            const latestHouseIdParts = latestHouse.house_id.split("-");
            const newHouseIdNumber = parseInt(latestHouseIdParts[2]) + 1;
            const newHouseId = `bh-sh-${newHouseIdNumber}`;
            newHouseData = Object.assign(Object.assign({}, req.body), { house_id: newHouseId });
        }
        else {
            // If there are no houses in the database, start with bh-sh-1
            newHouseData = Object.assign(Object.assign({}, req.body), { house_id: "bh-sh-1" });
        }
        const createdHouse = yield (0, houses_service3_1.createHouseInDB)(newHouseData);
        res.status(201).json(createdHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createHouse = createHouse;
const updateHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const updatedHouseData = req.body;
        const updatedHouse = yield (0, houses_service3_1.updateHouseInDB)(houseId, updatedHouseData);
        if (!updatedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(updatedHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateHouse = updateHouse;
const updateHouseFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const updatedFields = req.body;
        const updatedHouse = yield (0, houses_service3_1.updateHouseFieldsInDB)(houseId, updatedFields);
        if (!updatedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(updatedHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateHouseFields = updateHouseFields;
const deleteHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const deletedHouse = yield (0, houses_service3_1.deleteHouseFromDB)(houseId);
        if (!deletedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json({ message: "House deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteHouse = deleteHouse;
