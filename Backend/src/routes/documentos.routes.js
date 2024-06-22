import { Router } from "express";
import {
  getMetadatosDocumento,
  getRevisionDocumento,
  postAddRevisionDocumento,
  postDataDocumento,
  subirDocumento,
} from "../controllers/documentos.controller.js";
const router = Router();

router.post("/metadatos", getMetadatosDocumento);
router.post("/revision", getRevisionDocumento);
router.post("/revisar", postAddRevisionDocumento);
router.post("/subir/archivo", subirDocumento);
router.post("/subir/metadatos",postDataDocumento);

export default router;
