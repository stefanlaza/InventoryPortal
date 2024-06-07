const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/request', async (req, res) => {
  const { employeeId, vacationDate } = req.body;
  const employee = await Employee.findById(employeeId);
  employee.vacations.push(vacationDate);
  await employee.save();
  res.redirect('/');
});

router.get('/calendar', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

module.exports = router;