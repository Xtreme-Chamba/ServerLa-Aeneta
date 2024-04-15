from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Document(BaseModel):
    title:str
    autor:str
    pages:int
    subject:str

@app.get ("/")
def index():
    return {
        "msg" : "primer mensaje en un json" , 
        "numero" : 8
        }

@app.get("/documentos/{id}/{ruta}")
def show_document(id:int , ruta:str):
    return {
        "id" : id,
        "ruta" : ruta
    }


@app.post("/document")
def insert_document(doc:Document):
    return {"msg": f"Document {doc.title} has been inserted"}
