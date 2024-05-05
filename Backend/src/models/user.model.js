import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";
import UserType from "./user-type.model.js";

const User = sequelize.define('User', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_tipo_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

User.belongsTo(UserType, { foreignKey: 'id_tipo_usuario', as: 'tipo_usuario' })

export default User;