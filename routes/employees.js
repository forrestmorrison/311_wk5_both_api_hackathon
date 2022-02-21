const express = require('express');
const employeesController = require('../controllers/employees');
const router = express.Router();


router.get('/', employeesController.getEmployees);

router.get('/:first_name', employeesController.getEmployeesByFirstName);


module.exports = router;