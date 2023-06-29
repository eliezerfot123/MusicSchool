import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/db.js';

export const Persons = sequelize.define('persons', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            isEmail: {
              msg: "Email ya exíste",
            }
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intruments: {
        type: DataTypes.STRING,
        allowNull: false
    }
});