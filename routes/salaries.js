const express = require('express')
const router = express.Router()
const salariesController = require('../controllers/salaries')

router.get("/", salariesController.getSalaries)
router.get("/:emp_no", salariesController.getSalariesById)

module.exports = router;