'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    make: {
        type: String,
        required: 'Enter the make of the car'
    },
    model: {
        type: String,
        required: 'Enter the model of the car'
    },
    year: {
        type: Number,
        required: "Enter the manufacturing year of the car"
    },
    regnumber: {
      type: String,
      required: "Enter the registration number"
    },
    inspectiondate: {
        type: Date
    },
    enginesize: {
        type: Number,
        required: "Enter the size of the engine"
    },
    enginepower: {
        type: Number,
        required: "Enter the power of the engine in HP"
    }
});

module.exports = mongoose.model('Cars', CarSchema);