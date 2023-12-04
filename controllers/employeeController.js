// const Employee = require('../models/employee');

import { StatusCodes } from 'http-status-codes';
import Employee from '../models/Employee.js';

//get all employee
export const getAllEmployees = async (req, res, next) => {
	// Employee.findAll()
	// 	.then((employees) => {
	// 		return res.status(200).json({ employee: employees });
	// 	})
	// 	.catch((err) => console.log(err));
	const allEmployees = await Employee.findAll();

	res.status(StatusCodes.OK).json(allEmployees);
};

export const getEmployee = async (req, res, next) => {
	const { employeeId } = req.params;
	const employee = await Employee.findOne({
		where: {
			employee_id: employeeId,
		},
	})
		.then((employees) => {
			if (!employees) {
				return res.status(404).json({ message: 'Employee not Found' });
			}
			res.status(200).json({
				employees: employees,
			});
		})
		.catch((err) => console.log(err));
};

export const createEmployee = (req, res, next) => {
	const id = req.body.id;
	const employee_id = req.body.empId;
	const firstname = req.body.fname;
	const lastname = req.body.lname;
	const minitial = req.body.minitial;
	const cardno = req.body.cardno;
	const desig = req.body.desig;
	const depid = req.body.depId;
	const adminid = req.body.adminId;

	Employee.create({
		id: id,
		employee_id: employee_id,
		first_name: firstname,
		last_name: lastname,
		middle_initial: minitial,
		card_number: cardno,
		designation: desig,
		department_id: depid,
		admin_id: adminid,
	})
		.then((result) => {
			console.log('Employee Created');
			res.status(201).json({
				message: 'Employee Created',
				employee: result,
			});
		})
		.catch((err) => console.log(err));
};

export const updateEmployee = (req, res, next) => {
	const employee_id = req.params.empId;
	const firstname = req.body.fname;
	const lastname = req.body.lname;
	const minitial = req.body.minitial;
	const cardno = req.body.cardno;
	const desig = req.body.desig;
	const depid = req.body.depId;
	const adminid = req.body.adminId;

	Employee.findOne({
		where: {
			employee_id: employee_id,
		},
	})
		.then((employees) => {
			if (!employees) {
				return res.status(404).json({
					message: 'Employee Not Found',
				});
			}
			employees.first_name = firstname;
			employees.last_name = lastname;
			employees.middle_initial = minitial;
			employees.card_number = cardno;
			employees.designation = desig;
			employees.department_id = depid;
			employees.admin_id = adminid;
			return employees.save();
		})
		.then((result) => {
			res.status(200).json({
				message: 'Employee Updated',
				employee: result,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteEmployee = (req, res, next) => {
	const employee_id = req.params.empId;
	Employee.findOne({
		where: {
			employee_id: employee_id,
		},
	})
		.then((employee) => {
			if (!employee) {
				return res.status(404).json({
					message: 'Employee not found!',
				});
			}
			return Employee.destroy({
				where: {
					employee_id: employee_id,
				},
			});
		})
		.then((result) => {
			res.status(200).json({
				message: 'Employee Deleted',
			});
		})
		.catch((err) => console.log(err));
};
