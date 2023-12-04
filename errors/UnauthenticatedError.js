import { StatusCodes } from 'http-status-codes';

export default class UnauthenticatedError extends Error {
	constructor(message) {
		super();
		this.name = 'UnauthenticatedError';
		this.message = message;
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}
