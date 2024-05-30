import { Router } from "express";
import {
    getDocumentInfo,
    getDocumentById,
    updateDocument
} from "../controllers/document.controller.js";

const router = Router();

//Getting document information
router.get("/docinfo", getDocumentInfo);
router.get("/documentbyid/:id", getDocumentById);

//updating data information
router.put("/updatedoc" , updateDocument);
export default router;
