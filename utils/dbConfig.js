// require("dotenv").config();
// const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST, // or localhost if on local machine
	port: Number(process.env.DB_PORT),
	dialect: 'postgres',
	models: [__dirname + '/models'],
	underscored: true,
});

// Docs
// I explicitly added the dialect because of the error 'Dialect needs to be explicitly supplied as of v4.0.0'
// https://stackoverflow.com/questions/46694157/dialect-needs-to-be-explicitly-supplied-as-of-v4-0-0
// https://www.makeuseof.com/use-postgresql-with-sequelize-in-nodejs/
export default sequelize;
