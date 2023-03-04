const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB databases
const bookingDB = 'mongodb://localhost/booking';
mongoose.connect(bookingDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB bookings database!`))
  .catch((err) => console.log(err));

const employeeDB = 'mongodb://localhost/employee';
mongoose.connect(employeeDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB employee database!`))
  .catch((err) => console.log(err));

const shiftDB = 'mongodb://localhost/shift';
mongoose.connect(shiftDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB shift database!`))
  .catch((err) => console.log(err));

// Import route files
const bookingRoutes = require('./routes/booking.routes');
const employeeRoutes = require('./routes/employee.routes');
const shiftRoutes = require('./routes/shift.routes');

// Set up routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/shifts', shiftRoutes);

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}...`));
