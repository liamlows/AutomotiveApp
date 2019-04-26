'use strict';
var Car = require('../model/appCar.js');

// Add car object to DB by UID
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
      "response":"Please provide input for all fields.(VIN/MAKE/MODEL/YEAR)"
    });
  }
  else{
    Car.createCarByUID(req.params.id, new_car, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Get car object from DB by UID
exports.get_car = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.getCarByUID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};
// Delete car object by CID
exports.delete_car = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.deleteCarByCID(req.params.id, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update all car info by CID
exports.update_car_all = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    var new_car = new Car(req.body);
    User.updateCarByID(req.params.id, new_car, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update car make by CID
exports.update_car_make = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else if(!req.body.MAKE){
    res.status(400).json({
      "code": 400,
      "response":"Missing Make in API request."
    });
  }
  else{
    User.updateCarMakeByID(req.params.id, req.body.MAKE, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update car model by CID
exports.update_car_model = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else if(!req.body.MODEL){
    res.status(400).json({
      "code": 400,
      "response":"Missing Model in API request."
    });
  }
  else{
    User.updateCarModelByID(req.params.id, req.body.MODEL, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update car year by CID
exports.update_car_year = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else if(!req.body.YEAR){
    res.status(400).json({
      "code": 400,
      "response":"Missing Year in API request."
    });
  }
  else{
    User.updateCarYearByID(req.params.id, req.body.YEAR, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update car average mileage by CID
exports.update_car_avg_mileage = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else if(!req.body.avg_mileage){
    res.status(400).json({
      "code": 400,
      "response":"Missing Model in API request."
    });
  }
  else{
    User.updateCarAvgMileageByID(req.params.id, req.body.avg_mileage, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update car current mileage by CID
exports.update_car_cur_mileage = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else if(!req.body.current_mileage){
    res.status(400).json({
      "code": 400,
      "response":"Missing Model in API request."
    });
  }
  else{
    User.updateCarCurMileageByID(req.params.id, req.body.current_mileage, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};