import { Router } from "express";
import {
  getMetadatosDocumento,
  guardarPdf,
} from "../controllers/documentos.controller.js";
const router = Router();

router.post("/documentos/metadatos", getMetadatosDocumento);
router.post("/documentos/subir", guardarPdf);

export default router;
