import { Router } from "express";
import {
  createReqHouse,
  deleteReqHouse,
  getAllReqHouse,
  getReqHouseById,
  updateReqHouse,
  updateReqHouseFields,
} from "./rh.controller";

const router: Router = Router();

router.get("/req_houses", getAllReqHouse);
router.get("/req_houses/:id", getReqHouseById);
router.post("/req_houses", createReqHouse);
router.put("/req_houses/:id", updateReqHouse);
router.patch("/req_houses/:id", updateReqHouseFields);
router.delete("/req_houses/:id", deleteReqHouse);

export default router;
