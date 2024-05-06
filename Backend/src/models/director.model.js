import sequelize from "../config/sequelizeInstance.js";
import { DataTypes } from "sequelize";

const Director = sequelize.define("Director", {
    idDocentes_directores: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_director: DataTypes.INTEGER,
    id_documento: DataTypes.INTEGER
}, 
{
    tableName: "docentes_directores",
    timestamps: false
});

export default Director;