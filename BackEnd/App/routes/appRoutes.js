'use strict';
module.exports = function(app) {
  var autoApp = require('../controller/appController');

  // REGISTER
  app.route('/register')
    .post(autoApp.create_user);
  // LOGIN
  app.route('/login')
    .post(autoApp.login_user);

};
