const Booking = require('../models/booking.model');
const Employee = require('../models/employee.model');

// Controller function to retrieve all bookings from the database
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('host').populate('gameMaster');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to retrieve a single booking by ID from the database
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('host').populate('gameMaster');
    res.json(booking);
  } catch (err) {
    res.status(404).json({ message: 'Booking not found' });
  }
};

// Controller function to create a new booking in the database
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to update an existing booking by ID in the database
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete a booking by ID from the database
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    res.json(booking);
  } catch (err) {
    res.status(404).json({ message: 'Booking not found' });
  }
};
