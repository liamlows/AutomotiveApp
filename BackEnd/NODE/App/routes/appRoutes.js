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

};
