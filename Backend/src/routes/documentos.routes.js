import { Router } from "express";
import { getMetadatosDocumento, getRevisionDocumento} from "../controllers/documentos.controller.js";
const router = Router();

router.post("/metadatos", getMetadatosDocumento);
router.post("/revision", getRevisionDocumento);


export default router;