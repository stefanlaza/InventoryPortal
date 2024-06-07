const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  filePath: String,
  date: Date
});

module.exports = mongoose.model('Contract', contractSchema);
