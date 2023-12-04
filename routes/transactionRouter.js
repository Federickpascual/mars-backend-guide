// const controller = require('../controllers/transaction_log');
// const router = require('express').Router();

import { Router } from 'express';
const router = Router();

import { getAllTransactions, createTransaction, getTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController.js';

router.route('/').get(getAllTransactions).post(createTransaction);
router.route('/:id').get(getTransaction).put(updateTransaction).delete(deleteTransaction);

export default router;
