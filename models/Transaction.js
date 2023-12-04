// const Sequelize = require('sequelize');
// const sequelize = require('../utils/config');

import { Sequelize } from 'sequelize';
import sequelize from '../utils/dbConfig.js';

const Transaction = sequelize.define('Transaction', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	tran_year: {
		type: Sequelize.STRING,
	},
	tran_month: {
		type: Sequelize.STRING,
	},
	tran_day: {
		type: Sequelize.STRING,
	},
	tran_time: {
		type: Sequelize.STRING,
	},
	tran_log: {
		type: Sequelize.STRING,
	},
	employee_id: {
		type: Sequelize.INTEGER,
	},
	gate_name: {
		type: Sequelize.STRING,
	},
	send_status: {
		type: Sequelize.INTEGER,
	},
});

export default Transaction;
