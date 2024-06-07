const express = require('express');
const router = express.Router();
const Payroll = require('../models/Payrolls');
const Employee = require('../models/Employee');

router.post('/process', async (req, res) => {
  const { employeeId, amount, date } = req.body;
  try {
    const payroll = new Payroll({ employee: employeeId, amount, date });
    await payroll.save();

    const employee = await Employee.findById(employeeId);
    const message = `Pay processed: ${employee.name} received ${amount} on ${date}`;
    await postMessage(message);

    res.redirect('/');
  } catch (error) {
    console.error('Error processing payroll:', error);
    res.status(500).send('Error processing payroll');
  }
});

module.exports = router;
