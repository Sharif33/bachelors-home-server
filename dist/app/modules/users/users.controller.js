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
exports.createUser = exports.getAllUser = void 0;
const users_service_1 = require("./users.service");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_service_1.getAllUsersFromDB)();
        res.send(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllUser = getAllUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserData = req.body;
        const createdUser = yield (0, users_service_1.createUserInDB)(newUserData);
        res.status(201).json(createdUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createUser = createUser;
