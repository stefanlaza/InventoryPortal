const express = require('express');
const router = express.Router();

// Mock data
let employees = [];

router.get('/', (req, res) => {
  res.json(employees);
});

router.post('/add', (req, res) => {
  const { name, position, department } = req.body;
  employees.push({ name, position, department });
  res.redirect('/');
});

module.exports = router;
