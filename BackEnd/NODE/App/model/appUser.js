//G##################################################################################################################################
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
//G##################################################################################################################################
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
  sql.query('SELECT * FROM `AutomotiveApp`.`users` WHERE email = ?',[login_user.email], function(err, res){
    //handles SQL error
    if(err) {
      result({"code":400,"response":"Fatal SQL error ocurred"}, null);
    }
    //some result is returned
    else {
      if(res.length > 0){
        //if passwords match
        if(res[0].password == hash){
          result(null,{
            "code":200,
            "response":"Login was sucessfull.",
            "u_id":res[0].u_id,
            "email":res[0].email,
            "first_name":res[0].first_name,
            "last_name":res[0].last_name
            });
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
  });
}

User.updateFNameById = function(id, first_name, result) {
  // update first name in MySQL
  sql.query("UPDATE `AutomotiveApp`.`users` SET first_name = ? WHERE u_id = ?", [first_name, id], function(err, res){
    // error handler
    if(err){
      result(err,null);
    }
    // successful update
    else{
      result(null,res);
    }
  });
}

User.updateLNameById = function(id, last_name, result) {
  // update last name in MySQL
  sql.query("UPDATE `AutomotiveApp`.`users` SET last_name = ? WHERE u_id = ?", [last_name, id], function(err, res){
    // error handler
    if(err){
      result(err,null);
    }
    // successful update
    else{
      result(null,res);
    }
  });
}

User.updatePassByID = function(id, password, result) {

  let hash = sha512(password);
  // update password in MySQL
  sql.query("UPDATE `AutomotiveApp`.`users` SET password = ? WHERE u_id = ?", [hash, id], function(err, res){
    // error handler
    if(err){
      result(err,null);
    }
    // successful update
    else{
      result(null,res);
    }
  });
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



//hhhh
//Delete user account
User.deleteUser = function(id,result) {
  sql.query("DELETE from `AutomotiveApp`.`users` WHERE u_id = ?;", [id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err); 
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};



//Set/remove favorite shop name and phone
User.updateShopByID = function(shop_fav, shop_num, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET shop_fav = ?, shop_num = ? WHERE u_id = ?;", [shop_fav, shop_num,id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};

User.removeShopByID = function(id,result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET shop_fav = '', shop_num = '' WHERE u_id = ?", [id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};



//Set/remove insurance name and policy
User.updateInsuranceByID = function(insurance_phone,insurance_num,insurance_company,insurance_email, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_phone = ?, insurance_num = ?, insurance_company = ?, insurance_email = ? WHERE u_id = ?", [insurance_phone,insurance_num,insurance_company,insurance_email,id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};

User.removeInsuranceByID = function(id, result){
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_phone = '', insurance_num = '', insurance_company = '', insurance_email = '' WHERE u_id = ?", [id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};
//G##################################################################################################################################