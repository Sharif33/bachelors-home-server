import { Router } from "express";
import {
  createHouse,
  deleteHouse,
  getAllHouse,
  getHouseById,
  updateHouse,
  updateHouseFields,
} from "./houses.controller4";

const router: Router = Router();

router.get("/houses", getAllHouse);
router.get("/houses/:id", getHouseById);
router.post("/houses", createHouse);
router.put("/houses/:id", updateHouse);
router.patch("/houses/:id", updateHouseFields);
router.delete("/houses/:id", deleteHouse);

export default router;
