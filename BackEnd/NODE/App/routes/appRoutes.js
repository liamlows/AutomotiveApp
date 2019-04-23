//G#########################################################################
'use strict';
module.exports = function(app) {
  var autoApp = require('../controller/appController');
  var autoMaintenance = require('../controller/appControllerMaintenance');


//G##################################################################################################################################
  // REGISTER
  app.route('/register')
    .post(autoApp.create_user);
    
  // LOGIN
  app.route('/login')
    .post(autoApp.login_user);
    
  // UPDATE
  app.route('/user/email/:id')
    .put(autoApp.update_email);
  app.route('/user/first_name/:id')
    .put(autoApp.update_fname);
  app.route('/user/last_name/:id')
    .put(autoApp.update_lname);
  app.route('/user/password/:id')
    .put(autoApp.update_pass);
    
//Delete user account
  app.route('/delete_user/:id')
    .delete(autoApp.delete_user);

//Set/remove favorite shop name and phone
  app.route('/user/update_shop/:id')
    .put(autoApp.update_shop);
  app.route('/user/remove_shop/:id')
    .put(autoApp.remove_shop);
    
//Set/remove insurance name and policy
  app.route('/user/update_insurance/:id')
    .put(autoApp.update_insurance);
  app.route('/user/remove_insurance/:id')
    .put(autoApp.remove_insurance);
 //G#################################################################################################################################   
    
    
 //G#################################################################################################################################
// Car
  app.route('/car/add_car/:id')
    .post(autoApp.add_car);
  app.route('/car/get_car/:id')
    .get(autoApp.get_car);
  app.route('/car/get_car_mileage')
    .get(autoApp.get_car_mileage);
  app.route('/car/delete_car/:id')
    .delete(autoApp.delete_car);
 //G#################################################################################################################################


    
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
