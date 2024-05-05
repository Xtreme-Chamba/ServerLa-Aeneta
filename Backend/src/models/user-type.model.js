import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const UserType = sequelize.define('UserType', {
    id_catalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_usuario: DataTypes.STRING
}, {
    tableName: "catalogo_tipos_usuario"
});

export default UserType;