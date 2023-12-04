// const adminAccess = require('../models/admin_access');

import AdminAccess from '../models/AdminAccess.js';

export const getAllAdmins = (req, res, next) => {
	AdminAccess.findAll()
		.then((adminaccess) => {
			return res.status(200).json({ adminaccess: adminaccess });
		})
		.catch((err) => console.log(err));
};

export const getAdmin = (req, res, next) => {
	const adminId = req.params.adminId;
	AdminAccess.findOne({
		where: {
			id: adminId,
		},
	})
		.then((adminaccess) => {
			if (!adminaccess) {
				return res.status(404).json({ message: 'Admin Access not Found' });
			}
			res.status(200).json({
				adminaccess: adminaccess,
			});
		})
		.catch((err) => console.log(err));
};

export const createAdmin = (req, res, next) => {
	const id = req.body.id;
	const serial_number = req.body.serial_number;
	const admin_name = req.body.admin_name;
	const admin_type = req.body.admin_type;
	const admin_mac = req.body.admin_mac;

	AdminAccess.create({
		id: id,
		serial_number: serial_number,
		admin_name: admin_name,
		admin_type: admin_type,
		admin_mac: admin_mac,
	})
		.then((result) => {
			console.log('Admin Access Created');
			res.status(201).json({
				message: 'Admin Access Created',
				admin: result,
			});
		})
		.catch((err) => console.log(err));
};

export const updateAdmin = (req, res, next) => {
	const adminId = req.params.adminId;
	const admin_id = req.body.admin_id;
	const serial_number = req.body.serial_number;
	const admin_name = req.body.admin_name;
	const admin_type = req.body.admin_type;
	const admin_mac = req.body.admin_mac;

	AdminAccess.findOne({
		where: {
			id: adminId,
		},
	})
		.then((adminaccess) => {
			if (!adminaccess) {
				return res.status(404).json({
					message: 'Admin Access Not Found',
				});
			}
			(adminaccess.serial_number = serial_number), (adminaccess.admin_name = admin_name), (adminaccess.admin_type = admin_type);
			adminaccess.admin_mac = admin_mac;
			return adminaccess.save();
		})
		.then((result) => {
			res.status(200).json({
				message: 'Admin Access Updated',
				adminaccess: result,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteAdmin = (req, res, next) => {
	const admin_id = req.params.adminId;
	AdminAccess.findOne({
		where: {
			id: admin_id,
		},
	})
		.then((adminaccess) => {
			if (!adminaccess) {
				return res.status(404).json({
					message: 'Admin Access not found!',
				});
			}
			return AdminAccess.destroy({
				where: {
					id: admin_id,
				},
			});
		})
		.then((result) => {
			res.status(200).json({
				message: 'Admin Access Deleted',
			});
		})
		.catch((err) => console.log(err));
};
