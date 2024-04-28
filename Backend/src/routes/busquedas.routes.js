import { Router } from "express";
import { postBusquedaTituloSimple, postBusquedaAutorSimple, 
    postBusquedaAnioPuntualSimple, postBusquedaAnioRangoSimple,
    postBusquedaPaginasTituloSimple, 
    postBusquedaPalabrasClaveSimple,
    postBusquedaPaginasPalabrasClaveSimple,
    postBusquedaPaginasAnioPuntualSimple,
    postBusquedaPaginasAutorSimple} from "../controllers/busquedas.controller.js";

const router = Router();

/*idea nomenclatura: 
/busqueda/ por prefijo para todo
/busqueda/campo/ para cada tipo de busqueda que lleva un solo campo
/busqeuda/campo/tipo si es que existen diferentes tipos de busquedas para un camplo, ejemplo, año, que tendría
    /busqueda/año/puntual
    /busqueda/año/rango
*/
router.post("/busqueda/titulo", postBusquedaTituloSimple);
router.post("/busqueda/paginas/titulo", postBusquedaPaginasTituloSimple);

router.post("/busqueda/autor", postBusquedaAutorSimple);
router.post("/busqueda/paginas/titulo", postBusquedaPaginasAutorSimple);

router.post("/busqueda/palabrasClave",postBusquedaPalabrasClaveSimple);
router.post("/busqueda/paginas/palabrasClave",postBusquedaPaginasPalabrasClaveSimple)

router.post("/busqueda/anio", postBusquedaAnioPuntualSimple);
router.post("/busqueda/anio/titulo", postBusquedaPaginasAnioPuntualSimple);

router.post("/busqueda/anio/rango", postBusquedaAnioRangoSimple);

export default router;
