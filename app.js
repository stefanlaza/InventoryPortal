const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hr-portal', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const vacationRoutes = require('./routes/vacations');
const payrollRoutes = require('./routes/payroll');
const contractRoutes = require('./routes/contracts');

app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);
app.use('/vacations', vacationRoutes);
app.use('/payroll', payrollRoutes);
app.use('/contracts', contractRoutes);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
