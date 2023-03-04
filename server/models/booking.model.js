const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  },
  host: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ],
  gameMaster: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
});

module.exports = mongoose.model('Booking', bookingSchema);
