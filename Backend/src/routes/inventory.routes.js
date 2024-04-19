import { Router } from "express";
import { getItems, addItem } from "../controllers/inventory.controller.js";

const router = Router();

router.post("/inventory", getItems);
router.post("/newItem", addItem);

export default router;
