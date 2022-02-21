const express = require('express');
const employeesController = require('../controllers/employees');

const router = express.Router();


router.get('/employees/', employeesController.getEmployees);
router.get('/employees/:emp_no', employeesController.getEmployeesById);
router.get('/employees/:first_name', employeesController.getEmployeesByFirstName);
// router.get('/salaries/:emp_no', employeesController.getSalariesById);



module.exports = router;