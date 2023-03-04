const Shift = require('../models/shift.model');

// get all shifts
exports.getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().populate('employees.PIC', 'name');
    res.json(shifts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create a new shift
exports.createShift = async (req, res) => {
  const { date, shiftPeriod, employees } = req.body;

  const newShift = new Shift({
    date,
    shiftPeriod,
    employees
  });

  try {
    const savedShift = await newShift.save();
    res.status(201).json(savedShift);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update a shift by id
exports.updateShift = async (req, res) => {
  const { date, shiftPeriod, employees } = req.body;

  try {
    const shift = await Shift.findById(req.params.id);
    if (!shift) return res.status(404).json({ message: 'Shift not found' });

    shift.date = date;
    shift.shiftPeriod = shiftPeriod;
    shift.employees = employees;

    const updatedShift = await shift.save();
    res.json(updatedShift);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete a shift by id
exports.deleteShift = async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id);
    if (!shift) return res.status(404).json({ message: 'Shift not found' });

    await shift.remove();
    res.json({ message: 'Shift deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
