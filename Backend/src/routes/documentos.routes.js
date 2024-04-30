import { Router } from "express";
import { getMetadatosDocumento } from "../controllers/documentos.controller.js";
const router = Router();

router.post("/documentos/metadatos", getMetadatosDocumento);

export default router;