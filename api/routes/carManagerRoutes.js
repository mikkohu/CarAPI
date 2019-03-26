'use strict';
module.exports = function(app) {

    var carManager = require('../controllers/carManagerController');

    app.route('/')
        .get(carManager.get_car_list);
    //Define routes
    app.route('/car')
        .get(carManager.query_cars)
        .post(carManager.add_car);

    app.route('/car/:carId')
        .get(carManager.get_car)
        .put(carManager.update_car)
        .delete(carManager.delete_car);


};