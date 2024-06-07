const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  vacations: [{ type: Date }]
});
module.exports = mongoose.model('Employee', employeeSchema);