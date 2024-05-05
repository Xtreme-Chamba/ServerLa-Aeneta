import { Router } from "express";
import { getUsers, registerUser } from '../controllers/user.controller.js';

const router = Router();

router.get("/", getUsers);
router.post("/register", registerUser);

export default router;