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
exports.deleteReqHouse = exports.updateReqHouseFields = exports.updateReqHouse = exports.createReqHouse = exports.createReqHouseComment = exports.getReqHouseCommentById = exports.getReqHouseById = exports.getAllReqHouseComment = exports.getAllReqHouse = void 0;
const rh_model_1 = require("./rh.model");
const rh_service_1 = require("./rh.service");
const getAllReqHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield (0, rh_service_1.getAllUReqHousesFromDB)();
        res.send(houses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllReqHouse = getAllReqHouse;
const getAllReqHouseComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield (0, rh_service_1.getAllUReqHouseCommentsFromDB)();
        res.send(houses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllReqHouseComment = getAllReqHouseComment;
const getReqHouseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const house = yield (0, rh_service_1.getReqHouseByIdFromDB)(id);
        if (!house) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(house);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReqHouseById = getReqHouseById;
const getReqHouseCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const house = yield (0, rh_service_1.getReqHouseCommentByIdFromDB)(id);
        if (!house) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(house);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReqHouseCommentById = getReqHouseCommentById;
const createReqHouseComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserData = req.body;
        const createdComment = yield (0, rh_service_1.createReqHouseCommentInDB)(newUserData);
        res.status(201).json(createdComment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createReqHouseComment = createReqHouseComment;
const createReqHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the latest house in the database
        const latestHouse = yield rh_model_1.ReqHouses.findOne({}, {}, { sort: { req_house_id: -1 } });
        let newHouseData;
        if (latestHouse) {
            // If there is a latest house, increment its house_id
            const latestHouseIdParts = latestHouse.req_house_id.split("-");
            const newHouseIdNumber = parseInt(latestHouseIdParts[2]) + 1;
            const newHouseId = `bh-reqh-${newHouseIdNumber}`;
            newHouseData = Object.assign(Object.assign({}, req.body), { req_house_id: newHouseId });
        }
        else {
            // If there are no houses in the database, start with bh-sh-1
            newHouseData = Object.assign(Object.assign({}, req.body), { req_house_id: "bh-reqh-1" });
        }
        const createdReqHouse = yield (0, rh_service_1.createReqHouseInDB)(newHouseData);
        res.status(201).json(createdReqHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createReqHouse = createReqHouse;
const updateReqHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const updatedHouseData = req.body;
        const updatedHouse = yield (0, rh_service_1.updateReqHouseInDB)(houseId, updatedHouseData);
        if (!updatedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(updatedHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateReqHouse = updateReqHouse;
const updateReqHouseFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const updatedFields = req.body;
        const updatedHouse = yield (0, rh_service_1.updateReqHouseFieldsInDB)(houseId, updatedFields);
        if (!updatedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(updatedHouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateReqHouseFields = updateReqHouseFields;
const deleteReqHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseId = req.params.id;
        const deletedHouse = yield (0, rh_service_1.deleteReqHouseFromDB)(houseId);
        if (!deletedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json({ message: "House deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteReqHouse = deleteReqHouse;
