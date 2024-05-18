import { Router } from "express";
import { postBusquedaTituloSimple, postBusquedaAutorSimple, 
    postBusquedaAnioPuntualSimple, postBusquedaAnioRangoSimple,
    postBusquedaPaginasTituloSimple, 
    postBusquedaPalabrasClaveSimple,
    postBusquedaPaginasPalabrasClaveSimple,
    postBusquedaPaginasAnioPuntualSimple,
    postBusquedaPaginasAutorSimple,
    postBusquedaNoRevisado,
    getBusquedaPaginasNoRevisado} from "../controllers/busquedas.controller.js";

const router = Router();

/*idea nomenclatura: 
/busqueda/ por prefijo para todo (se asigna desde el app.use() )
/busqueda/campo/ para cada tipo de busqueda que lleva un solo campo
/busqeuda/campo/tipo si es que existen diferentes tipos de busquedas para un camplo, ejemplo, año, que tendría
    /busqueda/año/puntual
    /busqueda/año/rango
*/
router.post("/titulo", postBusquedaTituloSimple);
router.post("/paginas/titulo", postBusquedaPaginasTituloSimple);

router.post("/autor", postBusquedaAutorSimple);
router.post("/paginas/titulo", postBusquedaPaginasAutorSimple);

router.post("/palabrasClave",postBusquedaPalabrasClaveSimple);
router.post("/paginas/palabrasClave",postBusquedaPaginasPalabrasClaveSimple)

router.post("/anio", postBusquedaAnioPuntualSimple);
router.post("/anio/titulo", postBusquedaPaginasAnioPuntualSimple);

router.post("/anio/rango", postBusquedaAnioRangoSimple);

router.post("/no_revisado",postBusquedaNoRevisado);
router.get("/paginas/no_revisado",getBusquedaPaginasNoRevisado);

export default router;
