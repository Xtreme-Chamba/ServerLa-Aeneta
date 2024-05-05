import { Router } from 'express';
import { getDocuments, getDocumentById, registerDocument } from '../controllers/document.controller.js' 

const router = Router();

router.get("/", getDocuments);
router.get("/:id", getDocumentById);
router.post("/register", registerDocument);


export default router;