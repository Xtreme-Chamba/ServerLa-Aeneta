import { Router } from "express";
import {
  getCustomers,
  addCustomer,
} from "../controllers/customer.controller.js";

const router = Router();

router.post("/customers", getCustomers);
router.post("/newCustomer", addCustomer);

export default router;
