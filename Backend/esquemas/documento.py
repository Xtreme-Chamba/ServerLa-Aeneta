from typing import Optional
from pydantic import BaseModel

class documento(BaseModel):
    idDocumento: int
    Titulo: str
    Palabras_clave: str
    Resumen: str
    año: str
    id_tipo_documento: str
    id_unidad_academica: str
    estado: bool
    url_archivo: str
    notas_revision: str