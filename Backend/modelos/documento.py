from sqlalchemy import Column, Table
from sqlalchemy.sql.sqltypes import Integer, String
from DataBase.db import meta, engine

documento = Table(
    "documento", 
    meta,
    Column("idDocumento", Integer, primary_key=True),
    Column("Titulo", String(45)),
    Column("Palabras_clave", String(45)),
    Column("Resumen", String(255)),
    Column("año", String(15)),
    Column("id_tipo_documento", Integer),
    Column("id_unidad_academica", Integer),
    Column("estado", bool),
    Column("url_archivo", String(255)),
    Column("notas_revision", String(255))
)

meta.create_all(engine)