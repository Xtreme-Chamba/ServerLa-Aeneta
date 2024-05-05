import DocumentType from "../models/document-type.model.js";
import Document from "../models/document.model.js";
import UAcademica from "../models/unidad-academica.model.js";

export const getDocuments = async (req, res) => {
    Document.findAll({
        include: [
            {
                model: DocumentType,
                as: 'tipo_documento'
            }, 
            {
                model: UAcademica,
                as: 'unidad_academica'
            }
        ],
        attributes: {
            exclude: ['id_tipo_documento', 'id_unidad_academica']
        }
    }).then( documentsList => {
        res.send({status: "OK", data: documentsList});
    }).catch( error => {
        console.error(error);
        res.status(500).send({status: "ERROR", error: "Ocurrio un error inesperado"});
    });
}

export const getDocumentById = async (req, res) => {
    const { id } = req.params;
    Document.findOne({
        include: [
            {
                model: DocumentType,
                as: "tipo_documento"
            },
            {
                model: UAcademica,
                as: "unidad_academica"
            }
        ],
        attributes: {
            exclude: ['id_tipo_documento', 'id_unidad_academica']
        },
        where: { idDocumento: id }
    }).then( document => {
        res.send({status: "OK", data: document});
    }).catch( error => {
        console.error(error);
        res.status(500).send({status: "ERROR", error: "Ocurrio un error inesperado"});
    });
}

export const registerDocument = async (req, res) => {
    try {
        const { titulo, 
            palabras_clave, 
            resumen, 
            anio, 
            id_tipo_documento, 
            id_unidad_academica, 
            revisado, 
            url_archivo } = req.body;
            
        const newDocument = await Document.create({
            titulo,
            palabras_clave,
            resumen,
            anio: parseInt(anio), // Utiliza el valor proporcionado o el valor predeterminado
            id_tipo_documento,
            id_unidad_academica,
            revisado: parseInt(revisado),
            url_archivo
        });
        console.log("Documento creado");
        res.send({status: "OK", data: newDocument.idDocumento});
    } catch ( error ) {
        console.error("Error al crear el documento ", error);
        res.status(500).json({ status: "ERROR", error: "Server internal Error" });
    }
}
