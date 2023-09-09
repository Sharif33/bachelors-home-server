import { Router } from "express";
import {
  createReqHouse,
  createReqHouseComment,
  deleteReqHouse,
  getAllReqHouse,
  getAllReqHouseComment,
  getReqHouseById,
  getReqHouseCommentById,
  updateReqHouse,
  updateReqHouseFields,
} from "./rh.controller";

const router: Router = Router();

router.get("/req_houses", getAllReqHouse);
router.get("/req_houses_comments", getAllReqHouseComment);
router.get("/req_houses_comments/:id", getReqHouseCommentById);
router.get("/req_houses/:id", getReqHouseById);
router.post("/req_houses", createReqHouse);
router.post("/req_houses_comments", createReqHouseComment);
router.put("/req_houses/:id", updateReqHouse);
router.patch("/req_houses/:id", updateReqHouseFields);
router.delete("/req_houses/:id", deleteReqHouse);

export default router;
