//G#########################################################################
'use strict';
module.exports = function(app) {
  var autoAppUser = require('../controller/appControllerUser');
  var autoAppCar = require('../controller/appControllerVehicle');
  var autoMaintenance = require('../controller/appControllerMaintenance');

  // REGISTER USER
  app.route('/api/register')
    .post(autoAppUser.create_user);
  // LOGIN USER
  app.route('/api/login')
    .post(autoAppUser.login_user);
  // DELETE USER
  app.route('/api/delete_user/:id')
    .delete(autoAppUser.delete_user);
  // UPDATE USER
  app.route('/api/user/email/:id')
    .put(autoAppUser.update_email);
  app.route('/api/user/first_name/:id')
    .put(autoAppUser.update_fname);
  app.route('/api/user/last_name/:id')
    .put(autoAppUser.update_lname);
  app.route('/api/user/password/:id')
    .put(autoAppUser.update_pass);
  app.route('/api/user/update_shop_name/:id')
    .put(autoAppUser.update_shop_name);
  app.route('/api/user/update_shop_rating/:id')
    .put(autoAppUser.update_shop_rating);
  app.route('/api/user/update_shop_address/:id')
    .put(autoAppUser.update_shop_address);
  app.route('/api/user/update_insurance_company/:id')
    .put(autoAppUser.update_insurance_company);
  app.route('/api/user/update_insurance_phone/:id')
    .put(autoAppUser.update_insurance_phone);
  app.route('/api/user/update_insurance_email/:id')
    .put(autoAppUser.update_insurance_email);
  app.route('/api/user/update_insurance_num/:id')
    .put(autoAppUser.update_insurance_num);

  // ADD CAR
  app.route('/api/car/add_car/:id')
    .post(autoAppCar.add_car);
  // GET CAR
  app.route('/api/car/get_car/:id')
    .get(autoAppCar.get_car);
  // DELETE CAR
  app.route('/api/car/delete_car/:id')
    .delete(autoAppCar.delete_car)
  // UPDATE CAR
  app.route('/api/car/update_car_all/:id')
    .put(autoAppCar.update_car_all)
  app.route('/api/car/update_car_make/:id')
    .put(autoAppCar.update_car_make)
  app.route('/api/car/update_car_model/:id')
    .put(autoAppCar.update_car_model)
  app.route('/api/car/update_car_year/:id')
    .put(autoAppCar.update_car_year)
  app.route('/api/car/update_car_avg_mileage/:id')
    .put(autoAppCar.update_car_avg_mileage)
  app.route('/api/car/update_car_cur_mileage/:id')
    .put(autoAppCar.update_car_cur_mileage)
  app.route('/api/car/update_car_oil_mileage/:id')
    .put(autoAppCar.update_car_oil_mileage)
  app.route('/api/car/update_car_tire_mileage/:id')
    .put(autoAppCar.update_car_tire_mileage)
  app.route('/api/car/update_car_maint_mileage/:id')
    .put(autoAppCar.update_car_maint_mileage)

  // ADD MAINTENANCE RERCORD
  app.route('/api/maintenance/add_maint/:id')
    .post(autoMaintenance.add_maint);
  // GET MAINTENANCE RERCORD
  app.route('/api/maintenance/get_maint/:id')
    .get(autoMaintenance.get_maint);
    // DELETE MAINTENANCE RERCORD
  app.route('/api/maintenance/delete_maint/:id')
    .delete(autoMaintenance.delete_maint_MID);
  app.route('/api/maintenance/delete_maint_CID/:id')
    .delete(autoMaintenance.delete_maint_CID);
  // UPDATE MAINTENANCE RERCORD
  app.route('/api/maintenance/update_maint/:id')
    .put(autoMaintenance.update_maint);
  app.route('/api/maintenance/update_type/:id')
    .put(autoMaintenance.update_type);
  app.route('/api/maintenance/update_last_mileage/:id')
    .put(autoMaintenance.update_last_mileage);
  app.route('/api/maintenance/update_date_serviced/:id')
    .put(autoMaintenance.update_date_serviced);
  app.route('/api/maintenance/update_cost/:id')
    .put(autoMaintenance.update_cost);
  app.route('/api/maintenance/update_description/:id')
    .put(autoMaintenance.update_description);


};
