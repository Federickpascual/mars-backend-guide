import { StatusCodes } from 'http-status-codes';

// Error handler of express
const errorHandlerMiddleware = (err, req, res, next) => {
	const {
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
		message = 'Something went wrong',
	} = err;

	console.log(err);
	res.status(statusCode).json({ message });
};

export default errorHandlerMiddleware;
