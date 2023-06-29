import { Sequelize } from "sequelize";
import 'dotenv/config'


export const sequelize = new Sequelize(
    process.env.NAME_DATABASE, 
    process.env.USER_DATABASE, 
    process.env.PWD_DATABASE, {
        host: process.env.HOST_DATABASE,
        dialect: 'postgresql'       
    }
)

