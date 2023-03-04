const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShiftsSchema = new Schema({
    shiftPeriod: {
        type: String,
        enum: ['Morning', 'Evening'],
        required: [true, 'Please select the shift period.'],
    },
    date: {
        type: Date,
        required: [true, 'Please provide the shift date.'],
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: [true, 'Please provide at least one employee.'],
    }],
    pic: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: [true, 'Please provide the person in charge.'],
    }
}, {
    timestamps: true
});

const Shifts = mongoose.model('Shifts', ShiftsSchema);

module.exports = Shifts;
