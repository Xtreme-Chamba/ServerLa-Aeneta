import sequelize from "../config/sequelizeInstance.js";
import { DataTypes } from "sequelize";

const UAcademica = sequelize.define("UAcademica", {
    id_catalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    unidad_academica: DataTypes.STRING
},{
    tableName: "catalogo_unidades_academicas",
    timestamps: false
});

export default UAcademica;