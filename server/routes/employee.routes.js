const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

// GET all employees
router.get('/', employeeController.getAllEmployees);

// GET a specific employee by ID
router.get('/:id', employeeController.getEmployeeById);

// CREATE a new employee
router.post('/', employeeController.createEmployee);

// UPDATE an existing employee by ID
router.patch('/:id', employeeController.updateEmployee);

// DELETE an employee by ID
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
