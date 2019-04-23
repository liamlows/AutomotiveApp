//G##################################################################################################################################
'use strict';
var User = require('../model/appUser.js');
var Car = require('../model/appCar.js');

//G##################################################################################################################################
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
exports.update_fname = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing first name
  else if(!req.body.first_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing first name in API request body."
    });
  }
  else{
    // update name function
    User.updateFNameById(req.params.id, req.body.first_name, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
exports.update_lname = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing last name
  else if(!req.body.last_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing last name in API request body."
    });
  }
  else{
    // update last name function
    User.updateLNameById(req.params.id, req.body.last_name, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
exports.update_pass = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing password
  else if(!req.body.password){
    res.status(400).json({
      "code": 400,
      "response":"Missing password in API request body."
    });
  }
  else{
    // update password hash func
    User.updatePassByID(req.params.id, req.body.password, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};

//Delete user account

exports.delete_user = function(req,res){

    if(!req.params.id){
        res.status(400).json({
            "code": 400,
            "response":"Missing ID in API request."
        });
    }
    else{
    // if input is provided, delete user
        User.deleteUser(req.params.id, function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
  }
};

//Set/remove favorite shop name and phone

exports.update_shop = function(req,res){

    if(!req.params.id){
        res.status(400).json({
            "code": 400,
            "response":"Missing ID in API request."
        });
    }
    else if(!req.body.shop_fav){
         res.status(400).json({
            "code": 400,
            "response":"Missing Shop in API request."
        });
    }
    else if(!req.body.shop_num){
         res.status(400).json({
            "code": 400,
            "response":"Missing Shop number in API request."
        });
    }
    else{
    // if input is provided, create shop
        User.updateShopByID(req.body.shop_fav,req.body.shop_num, req.params.id,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
  }
};

exports.remove_shop = function(req,res){

    if(!req.params.id){
        res.status(400).json({
            "code": 400,
            "response":"Missing ID in API request."
        });
    }
    else{
    // if input is provided, create shop
        User.removeShopByID(req.params.id,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
  }
};

//Set/remove insurance name and policy

exports.update_insurance = function(req,res){

    if(!req.params.id|| !req.body.insurance_num || !req.body.insurance_phone || !req.body.insurance_company || !req.body.insurance_email){
        res.status(400).json({
            "code": 400,
            "response":"Missing"
        });
    }
    else{
    // if input is provided, create shop
        User.updateInsuranceByID(req.body.insurance_num,req.body.insurance_phone,req.body.insurance_company,req.body.insurance_email, req.params.id,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};

exports.remove_insurance = function(req,res){

    if(!req.params.id){
        res.status(400).json({
            "code": 400,
            "response":"Missing ID in API request."
        });
    }
    else{
    // if input is provided, create shop
        User.removeInsuranceByID(req.params.id,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};
//G##################################################################################################################################

//G##################################################################################################################################
exports.add_car = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // create new car object ######## IS THIS ABSOLUTELY NECCESARY???? ########
  var new_car = new Car(req.body);
  // handles empty input
  if (!new_car.MAKE || !new_car.MODEL || !new_car.YEAR) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields.(MAKE/MODEL/YEAR)"
    });
  }
  else{
    Car.createCar(req.params.id, new_car, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
exports.get_car = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.getCarByCID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};

exports.get_car_mileage = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.getCarMileageByCID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};


exports.delete_car = function(req,res){

    if(!req.params.id){
        res.status(400).json({
            "code": 400,
            "response":"Missing ID in API request."
        });
    }
    else{
    // if input is provided, create shop
        Car.deleteCarByCID(req.params.id,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};
//G##################################################################################################################################
