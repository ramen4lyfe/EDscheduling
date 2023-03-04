const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shift.controller');

// GET all shifts
router.get('/', shiftController.getShifts);

// CREATE a new shift
router.post('/', shiftController.createShift);

// UPDATE an existing shift by ID
router.patch('/:id', shiftController.updateShift);

// DELETE a shift by ID
router.delete('/:id', shiftController.deleteShift);

module.exports = router;
