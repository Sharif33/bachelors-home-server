import { Router } from "express";
import { createUser, getAllUser } from "./users.controller";

const router: Router = Router();

router.get("/users", getAllUser);
router.post("/users", createUser);
export default router;
