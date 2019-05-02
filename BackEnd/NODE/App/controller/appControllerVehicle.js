'use strict';
var Car = require('../model/appVehicle.js');

// This is the controller file for handling the API requests for the vehicles table
// The associated file with actual SQL queries is appVehicle.js

// Add car object to DB by UID
exports.add_car = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_car = new Car(req.body);
  // handles empty input
  if (!new_car.MAKE || !new_car.MODEL || !new_car.YEAR) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields.(MAKE/MODEL/YEAR)"
    });
  }
  else{
    Car.createCarByUID(req.params.id, new_car, function(err,car){
      if(err){
        res.send(err);
      }
      else {
        res.json(car);
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
    Car.deleteCarByCID(req.params.id, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
    Car.updateCarByID(req.params.id, new_car, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
    Car.updateCarMakeByID(req.params.id, req.body.MAKE, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
    Car.updateCarModelByID(req.params.id, req.body.MODEL, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
    Car.updateCarYearByID(req.params.id, req.body.YEAR, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
  else{
    Car.updateCarAvgMileageByID(req.params.id, req.body.avg_mileage, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
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
  else{
    Car.updateCarCurMileageByID(req.params.id, req.body.current_mileage, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
      }
    });
  }
};
// Update car last oil mileage by CID
exports.update_car_oil_mileage = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.updateCarMileageOilByID(req.params.id, req.body.miles_oil, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
      }
    });
  }
};
// Update car last tire mileage by CID
exports.update_car_tire_mileage = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.updateCarMileageTireByID(req.params.id, req.body.miles_tire, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
      }
    });
  }
};
// Update car last maintenance mileage by CID
exports.update_car_maint_mileage = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Car.updateCarMileageMainteByID(req.params.id, req.body.miles_maint, function(err,car){
      if (err){
        res.send(err);
      }
      else{
        res.json(car);
      }
    });
  }
};
