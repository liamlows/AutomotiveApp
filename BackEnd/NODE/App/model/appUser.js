'use strict';
var sql = require('./dbConn.js');
var sha512 = require('js-sha512');

//User object constructor
var User = function(user) {
  this.email = user.email;
  this.password = user.password;
  if(user.first_name)
    this.first_name = user.first_name;
  if(user.last_name)
    this.last_name = user.last_name;
  this.created_at = new Date();
};

User.createUser = function(newUser, result) {
  //gen hash
  let hash = sha512(newUser.password);
  //call query
  sql.query("INSERT INTO `AutomotiveApp`.`users` (`email`, `first_name`, `last_name`, `password`) VALUES ('" + newUser.email + "', '" + newUser.first_name + "', '" + newUser.last_name + "', '" + hash + "');",
    function(err, res) {
      //if invalid query, send error to user
      if (err) {
        result({"code":204,"response":"Email is already taken."}, null);
      }
      // if valid response, send response to user
      else {
        result(null,{"code":200,"response":"User creation was sucessfull."});
      }
    }
  );
};

User.loginUser = function(login_user, result){
  //gen hash
  let hash = sha512(login_user.password);
  //query DB
  sql.query('SELECT password FROM `AutomotiveApp`.`users` WHERE email = ?',[login_user.email], function(err, res){
    //handles SQL error
    if(err) {
      result({"code":400,"response":"Fatal SQL error ocurred"}, null);
    }
    //some result is returned
    else {
      if(res.length > 0){
        //if passwords match
        if(res[0].password == hash){
          result(null,{"code":200,"response":"Login was sucessfull."});
        }
        //if passwords are different
        else{
          result({"code":204,"response":"Email and/or password do not match."},null);
        }
      }
      //if no results are found (no email)
      else{
        result({"code":204,"response":"Email does not exist."},null);
      }
    }
  });
}

// Task.updateById = function(id, task, result) {
//   sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function(err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     }
//     else {
//       result(null, res);
//     }
//   });
// };

User.updateEmailById = function(id, email, result) {
  // update email in MySQL
  sql.query("UPDATE `AutomotiveApp`.`users` SET email = ? WHERE u_id = ?", [email, id], function(err, res){
    // error handler
    if(err){
      result(err,null);
    }
    // successful update
    else{
      result(null,res);
    }
  })
}

User.listUsers = function(result) {
  sql.query("SELECT * from `AutomotiveApp`.`users`;", function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(null, err);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};

module.exports = User;
