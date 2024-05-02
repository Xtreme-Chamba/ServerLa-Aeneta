import { Router } from "express";
import { registerUser, logUser } from "../controllers/userController.js";

const router = Router();

router.post("/login", logUser);

export default router;
