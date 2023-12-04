// const Transaction = require('../models/transaction_log');

import Transaction from '../models/Transaction.js';

export const getAllTransactions = (req, res, next) => {
	Transaction.findAll()
		.then((transaction) => {
			res.status(201).json({ message: 'All transaction', data: transaction });
		})
		.catch((err) => console.log(err));
};

export const getTransaction = (req, res, next) => {
	const transactionId = req.params.id;
	Transaction.findOne({
		where: {
			id: transactionId,
		},
	})
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).json({ message: 'Transaction Log Not Found' });
			}
			res.status(200).json({
				transaction: transaction,
			});
		})
		.catch((err) => console.log(err));
};

export const createTransaction = (req, res, next) => {
	const id = req.body.id;
	const year = req.body.year;
	const month = req.body.month;
	const day = req.body.day;
	const time = req.body.time;
	const log = req.body.log;
	const empId = req.body.employee_id;
	const gatename = req.body.gatename;
	const sendstatus = req.body.status;

	Transaction.create({
		id: id,
		tran_year: year,
		tran_month: month,
		tran_day: day,
		tran_time: time,
		tran_log: log,
		employee_id: empId,
		gate_name: gatename,
		send_status: sendstatus,
	})
		.then((result) => {
			console.log('Transaction Created');
			res.status(201).json({
				message: 'Transaction Created',
				admin: result,
			});
		})
		.catch((err) => console.log(err));
};

export const updateTransaction = (req, res, next) => {
	const id = req.params.id;
	const year = req.body.year;
	const month = req.body.month;
	const day = req.body.day;
	const time = req.body.time;
	const log = req.body.log;
	const empId = req.body.employee_id;
	const gatename = req.body.gatename;
	const sendstatus = req.body.status;

	Transaction.findOne({
		where: {
			id: id,
		},
	})
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).json({
					message: 'Transaction Logs Not Found',
				});
			}
			(transaction.tran_year = year),
				(transaction.tran_month = month),
				(transaction.tran_day = day),
				(transaction.tran_time = time),
				(transaction.tran_log = log),
				(transaction.employee_id = empId),
				(transaction.gate_name = gatename),
				(transaction.send_status = sendstatus);
			return transaction.save();
		})
		.then((result) => {
			res.status(200).json({
				message: 'Transaction Logs Updated',
				adminaccess: result,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteTransaction = (req, res, next) => {
	const id = req.params.id;
	Transaction.findOne({
		where: {
			id: id,
		},
	})
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).json({
					message: 'Transaction Log not found!',
				});
			}
			return Transaction.destroy({
				where: {
					id: id,
				},
			});
		})
		.then((result) => {
			res.status(200).json({
				message: 'Transaction Log Deleted',
			});
		})
		.catch((err) => console.log(err));
};
