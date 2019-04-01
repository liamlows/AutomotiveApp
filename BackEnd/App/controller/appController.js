'use strict';
var User = require('../model/appUser.js');

exports.create_user = function(req,res){
  // gen user obj
  var new_user = new User(req.body);
  // handles empty input
  if (!new_user.email || !new_user.password || !new_user.first_name || !new_user.last_name) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }
  else{
    // if input is provided, create user
    User.createUser(new_user, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};

exports.login_user = function(req,res){
  // gen user obj
  var login_user = new User(req.body);
  // handles empty input
  if(!login_user.email || !login_user.password){
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }
  else{
    // if input is provided, login user
    User.loginUser(login_user, function(err, user){
      if(err){
        res.json(err);
      }
      else {
        res.json(user);
      }
    });
  }
};

exports.update_email = function(req,res){
  // handle missing ID num
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing email from body
  else if(!req.body.email){
    res.status(400).json({
      "code": 400,
      "response":"Missing email in API request body."
    });
  }
  else{
    // update email function
    User.updateEmailById(req.params.id, req.body.email, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};


// exports.update_a_task = function(req, res) {
//   Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// -------------------------------  NOTES  -------------------------------

// exports.list_users = function(req, res){
//   // call on Task obj
//   User.listUsers(
//     //pass function to getAllTask
//     function(err, task){
//       console.log("Listing Users. User req: ");
//
//       // Exception handling
//       if(err){
//         res.send(err);
//         console.log('err: ', err);
//       }
//       // Send task response if success
//       console.log('Successful All Tasks', task);
//       res.send(task);
//     }
//   );
// };
