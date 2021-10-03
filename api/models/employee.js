const mongoose = require('mongoose')


const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true,
        default: Date.now()
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('employees', EmployeeSchema)