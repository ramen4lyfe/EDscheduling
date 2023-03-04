const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

// GET all bookings
router.get('/', bookingController.getBookings);

// GET a specific booking by ID
router.get('/:id', bookingController.getBookingById);

// CREATE a new booking
router.post('/', bookingController.createBooking);

// UPDATE an existing booking by ID
router.patch('/:id', bookingController.updateBooking);

// DELETE a booking by ID
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
