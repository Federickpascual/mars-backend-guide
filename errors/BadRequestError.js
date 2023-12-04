import { StatusCodes } from 'http-status-codes';

export default class BadRequestError extends Error {
	constructor(message) {
		super();
		this.name = 'BadRequestError';
		this.message = message;
		this.statusCode = StatusCodes.BAD_REQUEST;
	}
}
