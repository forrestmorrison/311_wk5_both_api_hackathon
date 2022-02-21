const express = require('express');
const employeesController = require('../controllers/employees')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('getting employees...');
});

router.get('/:first_name', employeesController.getEmployeesByFirstName)


module.exports = router;