const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB databases
const bookingDB = mongoose.createConnection('mongodb://localhost/booking', { useNewUrlParser: true, useUnifiedTopology: true });
const employeeDB = mongoose.createConnection('mongodb://localhost/employee', { useNewUrlParser: true, useUnifiedTopology: true });
const shiftDB = mongoose.createConnection('mongodb://localhost/shift', { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection events
bookingDB.on('error', (err) => console.error(err));
bookingDB.once('open', () => console.log(`Connected to MongoDB bookings database!`));

employeeDB.on('error', (err) => console.error(err));
employeeDB.once('open', () => console.log(`Connected to MongoDB employee database!`));

shiftDB.on('error', (err) => console.error(err));
shiftDB.once('open', () => console.log(`Connected to MongoDB shift database!`));

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
