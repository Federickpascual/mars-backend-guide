import { StatusCodes } from 'http-status-codes';

export default class UnauthorizedError extends Error {
	constructor(message) {
		super();
		this.name = 'UnauthorizedError';
		this.message = message;
		this.statusCode = StatusCodes.FORBIDDEN;
	}
}
