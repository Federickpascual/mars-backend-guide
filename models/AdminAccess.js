// const Sequelize = require('sequelize');
// const sequelize = require('../utils/config');

import { Sequelize } from 'sequelize';
import sequelize from '../utils/dbConfig.js';

const AdminAccess = sequelize.define('AdminAccess', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	serial_number: {
		type: Sequelize.STRING,
	},
	admin_name: {
		type: Sequelize.STRING,
	},
	admin_type: {
		type: Sequelize.STRING,
	},
	admin_mac: {
		type: Sequelize.STRING,
	},
});

export default AdminAccess;
