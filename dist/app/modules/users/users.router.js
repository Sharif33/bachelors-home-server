"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const router = (0, express_1.Router)();
router.get("/users", users_controller_1.getAllUser);
router.post("/users", users_controller_1.createUser);
exports.default = router;
