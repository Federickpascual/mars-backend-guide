// const Sequelize = require('sequelize');
// const sequelize = require('../utils/config');

import { Sequelize } from 'sequelize';
import sequelize from '../utils/dbConfig.js';

const Employee = sequelize.define('Employee', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	first_name: {
		type: Sequelize.STRING,
	},
	last_name: {
		type: Sequelize.STRING,
	},
	middle_initial: {
		type: Sequelize.STRING,
	},
	card_number: {
		type: Sequelize.STRING,
	},
	designation: {
		type: Sequelize.STRING,
	},
	department_id: {
		type: Sequelize.INTEGER,
	},
	admin_id: {
		type: Sequelize.STRING,
	},
});

export default Employee;
