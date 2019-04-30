'use strict';
var sql = require('./dbConn.js');
var sha512 = require('js-sha512');

//User object constructor
var User = function(user) {
  this.email = user.email;
  this.password = user.password;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.created_at = new Date();
};

// creates user to be inserted into database
User.createUser = function(newUser, result) {
  let hash = sha512(newUser.password);
  sql.query("INSERT INTO `AutomotiveApp`.`users` (`email`, `first_name`, `last_name`, `password`) VALUES ('" + newUser.email + "', '" + newUser.first_name + "', '" + newUser.last_name + "', '" + hash + "');",
    function(err, res) {
      if (err) {
        result({"code":204,"response":"Email is already taken."}, null);
      }
      else {
        result(null,{"code":200,"response":"User creation was sucessfull."});
      }
    }
  );
};

// attempts to login user if found in database
User.loginUser = function(login_user, result){
  let hash = sha512(login_user.password);
  sql.query('SELECT * FROM `AutomotiveApp`.`users` WHERE email = ?;',[login_user.email], function(err, res){
    if(err) {
      result({"code":400,"response":"Fatal SQL error ocurred"}, null);
    }
    else {
      //if email was found
      if(res.length > 0){
        //if passwords match
        if(res[0].password == hash){
          result(null,{
            "code":200,
            "response":"Login was sucessfull.",
            "u_id":res[0].u_id,
            "email":res[0].email,
            "first_name":res[0].first_name,
            "last_name":res[0].last_name,
            "shop_name":res[0].shop_name,
            "shop_phone":res[0].shop_phone,
            "insurance_company":res[0].insurance_company,
            "insurance_phone":res[0].insurance_phone,
            "insurance_email":res[0].insurance_email,
            "insurance_num":res[0].insurance_num
            });
        }
        //if passwords are different
        else{
          result({"code":204,"response":"Email and/or password do not match."},null);
        }
      }
      //if no email id found
      else{
        result({"code":204,"response":"Email does not exist."},null);
      }
    }
  });
}

//Delete user account
User.deleteUserByID = function(id,result) {
  sql.query("DELETE from `AutomotiveApp`.`users` WHERE u_id = ?;", [id], function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, {"code":200,"response":"Deleted USER with UID="+id});
    }
  });
};

// update email by user id
User.updateEmailByID = function(id, email, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET email = ? WHERE u_id = ?;", [email, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "email":email
        });
    }
  });
}

// update first name by user id
User.updateFNameByID = function(id, first_name, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET first_name = ? WHERE u_id = ?;", [first_name, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "first_name":first_name
        });
    }
  });
}

// update last name by user id
User.updateLNameByID = function(id, last_name, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET last_name = ? WHERE u_id = ?;", [last_name, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "last_name":last_name
        });
    }
  });
}

// update password by user id
User.updatePassByID = function(id, password, result) {
  let hash = sha512(password);
  sql.query("UPDATE `AutomotiveApp`.`users` SET password = ? WHERE u_id = ?;", [hash, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull."
        });
    }
  });
}

// update/remove favorite shop name
User.updateShopNameByID = function(shop_name, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET shop_name = ? WHERE u_id = ?;", [shop_name, id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, {
        "code":200,
        "response":"Update was sucessfull.",
        "shop_name":shop_name
        });
    }
  });
};

// update/remove favorite shop phone
User.updateShopPhoneByID = function(shop_phone, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET shop_phone = ? WHERE u_id = ?;", [shop_phone,id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null, {
        "code":200,
        "response":"Update was sucessfull.",
        "shop_phone":shop_phone
        });
    }
  });
};

// update/remove insurance company
User.updateInsuranceCompanyByID = function(insurance_company, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_company = ? WHERE u_id = ?;", [insurance_company, id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "insurance_company":insurance_company
        });
    }
  });
};

// update/remove insurance phone
User.updateInsurancePhoneByID = function(insurance_phone, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_phone = ? WHERE u_id = ?", [insurance_phone, id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "insurance_phone":insurance_phone
        });
    }
  });
};

// update/remove insurance email
User.updateInsuranceEmailByID = function(insurance_email, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_email = ? WHERE u_id = ?;", [insurance_email, id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "insurance_email":insurance_email
        });
    }
  });
};

// update/remove insurance number
User.updateInsuranceNumByID = function(insurance_num, id, result) {
  sql.query("UPDATE `AutomotiveApp`.`users` SET insurance_num = ? WHERE u_id = ?;", [insurance_num, id], function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(err, null);
    } else {
      console.log('all tasks: ', res);
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "insurance_num":insurance_num
        });
    }
  });
};

module.exports = User;
