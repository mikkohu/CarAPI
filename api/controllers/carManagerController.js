'use strict';

var mongoose = require('mongoose');
var Car = mongoose.model('Cars');

//Returns all cars in the DB
exports.list_all_cars = function(req, res){
    Car.find({}, function(err, car){
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};

//Add a new car to the db
exports.add_car = function(req, res) {
    var new_car = new Car(req.body);

    new_car.save(function(err, car){
        if (err){
            res.send(err);
        }
        res.json(car);
    })
};

//Search for cars. Possible search parameters are make, model and year by minimum and maximum value.
exports.query_cars = function(req, res) {

    //Build object holding search parameters for the car
    var query = req.body;

    //Make the year parameter look for values between minYear and maxYear
    //This could also be done in the frontend, so that the request has a
    //proper query object as value for the year key.
    query.year  = {$gte: 0};
    req.body.minYear !== undefined ? query.year.$gte = req.body.minYear : null;
    req.body.maxYear !== undefined ? query.year.$lte = req.body.maxYear : null;

    //Remove the minYear and maxYear properties from the query
    delete query.minYear;
    delete query.maxYear;


    Car.find( query, function(err, cars) {
        if(err)
            res.send(err);
        res.json(cars);
    });
};

//Update a car with the id given as req param carId
exports.update_car = function(req, res) {
    Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new : true}, function(err, car) {
        if(err)
            res.send(err);
        res.json(car);
    });
};

//Delete car with given id from the db
exports.delete_car = function(req, res) {
    Car.findOneAndRemove({_id: req.params.carId}, function(err, car) {
        if(err)
            res.send(err);
        res.json({message: "Car with id "+req.params.carId+" deleted"});
    });
};
