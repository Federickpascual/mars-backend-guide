// const controller = require('../controllers/admin_access');
// const router = require('express').Router();

import { Router } from 'express';
const router = Router();

import { createAdmin, getAllAdmins, getAdmin, updateAdmin, deleteAdmin } from '../controllers/adminAccessController.js';

router.route('/').get(getAllAdmins).post(createAdmin);
router.route('/:adminId').get(getAdmin).put(updateAdmin).delete(deleteAdmin);

export default router;
