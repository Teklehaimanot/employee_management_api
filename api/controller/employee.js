const Employee = require('../models/employee')


const createOne = async(req, res) => {
    const employee = new Employee({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary: req.body.salary
    })

    try {
        const newEmployee = await employee.save();
        res.status(200).json(newEmployee)

    } catch (error) {
        res.status(404).json({
            error: 'Could not add an employee'
        })
    }

}

const getAll = async(req, res) => {

    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(404).json({
            error: 'Could not get employees'
        })
    }

}

const updateEmployee = async(req, res) => {

    try {
        const find = await Employee.findById({ _id: req.params.empid })
        if (!find) {
            res.status(404).json({ error: 'employee not found' })
        }
        const updateEmp = await Employee.updateOne({ _id: req.params.empid }, {
            $set: {
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                gender: req.body.gender,
                salary: req.body.salary
            }
        })
        console.log(req.body.dateOfBirth)
        res.status(200).json(updateEmp)
    } catch (error) {
        res.status(404).json({ 'message': error })
    }

}
const removeEmployee = async(req, res) => {
    {
        try {
            const find = await Employee.findById({ _id: req.params.empid })
            if (!find) {
                res.status(404).json({ error: 'employee not found' })
            }
            const emp = await Employee.remove({ _id: req.params.empid })
            res.status(200).json(emp)
        } catch (error) {
            res.status(404).json({ error: 'Could not remove an employee' })
        }
    }
}

module.exports = {
    createOne,
    getAll,
    updateEmployee,
    removeEmployee

}