// const Sequelize = require('sequelize');
// const sequelize = require('../utils/config');

import { Sequelize } from 'sequelize';
import sequelize from '../utils/dbConfig.js';

const Department = sequelize.define('Department', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	department_name: {
		type: Sequelize.STRING,
	},
	department_mac: {
		type: Sequelize.STRING,
	},
});

export default Department;
