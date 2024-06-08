import { Router } from "express";
import { getUsers, registerUser } from '../controllers/user.controller.js';
import { getAllNombresDocentes,
    getAllNombresDirectoresExternos
} from '../models/user.queries.js'//lo pongo así para no moverle demasiado al controlador que usa saquilize y no entiendo completamente

const router = Router();

router.get("/", getUsers);
router.post("/register", registerUser);


router.get("/directores/internos", getAllNombresDocentes);
router.get("/directores/externos", getAllNombresDirectoresExternos);

export default router;