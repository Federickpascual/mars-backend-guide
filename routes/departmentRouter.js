// const controller = require('../controllers/department');
// const router = require('express').Router();

import { Router } from 'express';
const router = Router();

import { getDepartment, getAllDepartments, createDepartment, updateDepartment, deleteDepartment } from '../controllers/departmentController.js';

router.route('/').get(getAllDepartments).post(createDepartment);
router.route('/:depId').get(getDepartment).put(updateDepartment).delete(deleteDepartment);

export default router;
