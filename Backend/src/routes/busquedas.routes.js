import { Router } from "express";
import { postBusquedaTituloSim, postBusquedaAutorSim } from "../controllers/busquedas.controller.js";

const router = Router();

/*idea nomenclatura: 
/busqueda/ por prefijo para todo
/busqueda/campo/ para cada tipo de busqueda que lleva un solo campo
/busqeuda/campo/tipo si es que existen diferentes tipos de busquedas para un camplo, ejemplo, año, que tendría
    /busqueda/año/puntual
    /busqueda/año/rango
*/
router.post("/busqueda/titulo", postBusquedaTituloSim);

router.post("/busqueda/autor", postBusquedaTituloSim);



export default router;
