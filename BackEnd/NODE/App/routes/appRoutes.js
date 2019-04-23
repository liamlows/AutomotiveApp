//G#########################################################################
'use strict';
module.exports = function(app) {
  var autoAppUser = require('../controller/appControllerUser');
  var autoAppCar = require('../controller/appControllerVehicle');
  var autoMaintenance = require('../controller/appControllerMaintenance');

  // REGISTER USER
  app.route('/register')
    .post(autoAppUser.create_user);
  // LOGIN USER
  app.route('/login')
    .post(autoAppUser.login_user);
  // DELETE USER
  app.route('/delete_user/:id')
    .delete(autoAppUser.delete_user);
  // UPDATE USER
  app.route('/user/email/:id')
    .put(autoAppUser.update_email);
  app.route('/user/first_name/:id')
    .put(autoAppUser.update_fname);
  app.route('/user/last_name/:id')
    .put(autoAppUser.update_lname);
  app.route('/user/password/:id')
    .put(autoAppUser.update_pass);
  app.route('/user/update_shop_name/:id')
    .put(autoAppUser.update_shop_name);
  app.route('/user/update_shop_phone/:id')
    .put(autoAppUser.update_shop_phone);
  app.route('/user/update_insurance_company/:id')
    .put(autoAppUser.update_insurance_company);
  app.route('/user/update_insurance_phone/:id')
    .put(autoAppUser.update_insurance_phone);
  app.route('/user/update_insurance_email/:id')
    .put(autoAppUser.update_insurance_email);
  app.route('/user/update_insurance_num/:id')
    .put(autoAppUser.update_insurance_num);

  // ADD CAR
  app.route('/car/add_car/:id')
    .post(autoAppCar.add_car);
  // GET CAR
  app.route('/car/get_car/:id')
    .get(autoAppCar.get_car);
  // DELETE CAR
  app.route('/car/delete_car/:id')
    .delete(autoAppCar.delete_car)
  // UPDATE CAR
  app.route('/car/update_car_all/:id')
    .put(autoAppCar.update_car_all)
  app.route('/car/update_car_make/:id')
    .put(autoAppCar.update_car_make)
  app.route('/car/update_car_model/:id')
    .put(autoAppCar.update_car_model)
  app.route('/car/update_car_year/:id')
    .put(autoAppCar.update_car_year)
  app.route('/car/update_car_avg_mileage/:id')
    .put(autoAppCar.update_car_avg_mileage)
  app.route('/car/update_car_cur_mileage/:id')
    .put(autoAppCar.update_car_cur_mileage)

//Maintainance
  app.route('/maintenance/add_maint/:id')
    .post(autoMaintenance.add_maint);

  app.route('/maintenance/get_maint/:id')
    .get(autoMaintenance.get_maint);

  app.route('/maintenance/update_maint/:id')
    .put(autoMaintenance.update_maint);

  app.route('/maintenance/update_type/:id')
    .put(autoMaintenance.update_type);

  app.route('/maintenance/update_last_mileage/:id')
    .put(autoMaintenance.update_last_mileage);

  app.route('/maintenance/update_date_serviced/:id')
    .put(autoMaintenance.update_date_serviced);

  app.route('/maintenance/update_cost/:id')
    .put(autoMaintenance.update_cost);

  app.route('/maintenance/update_description/:id')
    .put(autoMaintenance.update_description);

  app.route('/maintenance/delete_maint/:id')
    .delete(autoMaintenance.delete_maint);

};
