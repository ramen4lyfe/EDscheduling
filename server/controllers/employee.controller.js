const Employee = require('../models/employee.model');

const employeeController = {
  // Get all employees
  async getAllEmployees(req, res) {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Get employee by ID
  async getEmployeeById(req, res) {
    try {
      const employee = await Employee.findById(req.params.id);
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Create new employee
  async createEmployee(req, res) {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // Update employee by ID
  async updateEmployee(req, res) {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // Delete employee by ID
  async deleteEmployee(req, res) {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (employee) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = employeeController;
