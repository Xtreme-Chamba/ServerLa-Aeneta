import sequelize from "../config/sequelizeInstance.js";
import { DataTypes } from "sequelize";

const DocumentType = sequelize.define("DocumentType", {
    id_catalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_documento: DataTypes.STRING
},{
    tableName: "catalogo_tipos_documento",
    timestamps: false
});

export default DocumentType;