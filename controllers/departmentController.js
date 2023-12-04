// const Department = require('../models/Department');

import Department from '../models/Department.js';

// get all department
export const getAllDepartments = (req, res, next) => {
	Department.findAll()
		.then((departments) => {
			return res.status(200).json({ department: departments });
		})
		.catch((err) => console.log(err));
};

// find department
export const getDepartment = (req, res, next) => {
	const depId = req.params.depId;
	Department.findOne({
		where: {
			department_id: depId,
		},
	})
		.then((departments) => {
			if (!departments) {
				return res.status(404).json({ message: 'Department not Found' });
			}
			res.status(200).json({
				departments: department,
			});
		})
		.catch((err) => console.log(err));
};

export const createDepartment = (req, res, next) => {
	const id = req.body.id;
	const department_id = req.body.department_id;
	const department_name = req.body.department_name;
	const department_mac = req.body.department_mac;

	Department.create({
		id: id,
		department_id: department_id,
		department_name: department_name,
		department_mac: department_mac,
	})
		.then((result) => {
			console.log('Department Created');
			res.status(201).json({
				message: 'Department Created',
				department: result,
			});
		})
		.catch((err) => console.log(err));
};

export const updateDepartment = (req, res, next) => {
	const department_id = req.params.depId;
	const department_name = req.body.department_name;
	const department_mac = req.body.department_mac;

	Department.findOne({
		where: {
			department_id: department_id,
		},
	})
		.then((departments) => {
			if (!departments) {
				return res.status(404).json({
					message: 'Department Not Found',
				});
			}
			(departments.department_name = department_name), (departments.department_mac = department_mac);
			return departments.save();
		})
		.then((result) => {
			res.status(200).json({
				message: 'Employee Updated',
				employee: result,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteDepartment = (req, res, next) => {
	const department_id = req.params.depId;
	Department.findOne({
		where: {
			department_id: department_id,
		},
	})
		.then((deparments) => {
			if (!deparments) {
				return res.status(404).json({
					message: 'Department not found!',
				});
			}
			return Department.destroy({
				where: {
					department_id: department_id,
				},
			});
		})
		.then((result) => {
			res.status(200).json({
				message: 'Department Deleted',
			});
		})
		.catch((err) => console.log(err));
};
