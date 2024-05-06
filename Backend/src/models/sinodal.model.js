import sequelize from "../config/sequelizeInstance.js";
import { DataTypes } from "sequelize";

const Sinodal = sequelize.define("Sinodal", {
    idDocente_sinodal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_sinodal: DataTypes.INTEGER,
    id_documento: DataTypes.INTEGER,
    aceptado: DataTypes.TINYINT,
    comentarios: DataTypes.TEXT
},
{
    tableName: "docente_sinodal",
    timestamps: false
});

export default Sinodal;