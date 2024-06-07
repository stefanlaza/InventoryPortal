const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  amount: Number,
  date: Date
});

module.exports = mongoose.model('Payrolls', payrollSchema);
