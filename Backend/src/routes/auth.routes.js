import { Router } from "express";
import { postUser, logUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", postUser);
router.post("/login", logUser);

export default router;
