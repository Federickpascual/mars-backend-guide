// const express = require('express');
// const bodyparser = require('body-parser');
// const sequelize = require('./utils/config');
// const Employee = require('./models/employee');

// Imports
import 'express-async-errors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './utils/dbConfig.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { NotFoundError } from './errors/index.js';
import 'dotenv/config';

// Settings
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE',
	);
	next();
});
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

// Importing of routes
import employeeRouter from './routes/employeeRouter.js';
import departmentRouter from './routes/departmentRouter.js';
import transactionRouter from './routes/transactionRouter.js';
import adminAccessRouter from './routes/adminAccessRouter.js';

// Routes
app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/departments', departmentRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('/api/v1/admin-access', adminAccessRouter);

//error handler
app.use('*', (req, res) => {
	throw new NotFoundError('Endpoint not found');
});
app.use(errorHandlerMiddleware);

//sync database
sequelize
	.sync()
	.then((result) => {
		console.log('Database connected');
		console.log(`localhost:${process.env.PORT}`);
		app.listen(process.env.PORT);
	})
	.catch((err) => console.log(err));
