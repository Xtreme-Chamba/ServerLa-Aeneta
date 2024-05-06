import sequelize from "../config/sequelizeInstance.js";
import { DataTypes } from "sequelize";

const Autor = sequelize.define("Autor", {
    idAutor_Documento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_autor: DataTypes.INTEGER,
    id_documento: DataTypes.INTEGER
});

export default Autor;