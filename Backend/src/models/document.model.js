import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";
import DocumentType from "./document-type.model.js";
import UAcademica from "./unidad-academica.model.js";

const Document = sequelize.define("Document", {
    idDocumento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: DataTypes.STRING,
    palabras_clave: DataTypes.STRING,
    resumen: DataTypes.TEXT,
    anio: DataTypes.STRING,
    id_tipo_documento: DataTypes.INTEGER,
    id_unidad_academica: DataTypes.INTEGER,
    revisado: DataTypes.TINYINT,
    url_archivo: DataTypes.TEXT
}, {
    tableName: "documento",
    timestamps: false
});

Document.belongsTo(DocumentType, { foreignKey: 'id_tipo_documento', as: 'tipo_documento' });
Document.belongsTo(UAcademica, {foreignKey: 'id_unidad_academica', as: 'unidad_academica'});


export default Document;