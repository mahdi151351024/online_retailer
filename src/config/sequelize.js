import { Sequelize } from 'sequelize';
import config from '.';

const sequelize = new Sequelize(config.DB_DATABASE, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
});

export default sequelize;
