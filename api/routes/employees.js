const express = require('express')
const EmployeeController = require('../controller/employee')
const router = express.Router()


router.get('/', EmployeeController.getAll)

router.post('/', EmployeeController.createOne)

router.put('/:empid', EmployeeController.updateEmployee)

router.delete('/:empid', EmployeeController.removeEmployee)


module.exports = router;