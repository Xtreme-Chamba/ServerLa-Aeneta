import { Router } from "express";
import {
  getMetadatosDocumento,
  getRevisionDocumento,
  postAddRevisionDocumento,
  subirDocumento,
} from "../controllers/documentos.controller.js";
const router = Router();

router.post("/metadatos", getMetadatosDocumento);
router.post("/revision", getRevisionDocumento);
router.post("/revisar", postAddRevisionDocumento);
router.post("/subir", subirDocumento);

export default router;
