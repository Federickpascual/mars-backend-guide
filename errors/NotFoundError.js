import { StatusCodes } from 'http-status-codes';

export default class NotFoundError extends Error {
	constructor(message) {
		super();
		this.name = 'NotFoundError';
		this.message = message;
		this.statusCode = StatusCodes.NOT_FOUND;
	}
}
