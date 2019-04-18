'use strict';
module.exports = function(app) {
  var autoApp = require('../controller/appController');

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
  // Car
  app.route('/car/add_car/:id')
    .post(autoApp.add_car);
  app.route('/car/get_car/:id')
    .get(autoApp.get_car);

};
