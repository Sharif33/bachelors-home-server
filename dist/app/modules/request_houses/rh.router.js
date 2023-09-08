"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rh_controller_1 = require("./rh.controller");
const router = (0, express_1.Router)();
router.get("/req_houses", rh_controller_1.getAllReqHouse);
router.get("/req_houses/:id", rh_controller_1.getReqHouseById);
router.post("/req_houses", rh_controller_1.createReqHouse);
router.put("/req_houses/:id", rh_controller_1.updateReqHouse);
router.patch("/req_houses/:id", rh_controller_1.updateReqHouseFields);
router.delete("/req_houses/:id", rh_controller_1.deleteReqHouse);
exports.default = router;
