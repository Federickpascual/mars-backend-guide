// const controller = require('../controllers/employee');
// const router = require('express').Router();

import { Router } from 'express';
const router = Router();

import {
	getAllEmployees,
	createEmployee,
	getEmployee,
	updateEmployee,
	deleteEmployee,
} from '../controllers/employeeController.js';

router.route('/').get(getAllEmployees).post(createEmployee);
router
	.route('/:employeeId')
	.get(getEmployee)
	.put(updateEmployee)
	.delete(deleteEmployee);

export default router;
