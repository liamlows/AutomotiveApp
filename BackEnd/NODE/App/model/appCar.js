//G  #################################################################################
'use strict';
var sql = require('./dbConn.js');

//Car object constructor
var Car = function(car) {
  this.MAKE = car.MAKE;
  this.MODEL = car.MODEL;
  this.YEAR = car.YEAR;
  this.avg_mileage = car.avg_mileage;
  this.current_mileage = car.current_mileage;
  this.created_at = new Date();
};
//G  #################################################################################
Car.createCar = function(id, newCar, result) {
  //call query
  sql.query("INSERT INTO `AutomotiveApp`.`vehicles` (`u_id`, `MAKE`, `MODEL`, `YEAR`, `avg_mileage`, `current_mileage`) VALUES ('" + id + "', '" + newCar.MAKE + "', '" + newCar.MODEL + "', '" + newCar.YEAR + "', '" + newCar.avg_mileage + "', '" + newCar.current_mileage + "');",
    function(err, res) {
      //if invalid query, send error to user
      if (err) {
        result({"code":204,"response":"MYSQL entry error."}, null);
      }
      // if valid response, send response to user
      else {
        result(null,{"code":200,"response":"Car creation was sucessfull."});
      }
    }
  );
};
//GET Car by car id. User has option to store multiple cars
Car.getCarByCID = function(id, result) {
  sql.query("SELECT * FROM `AutomotiveApp`.`vehicles` WHERE u_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}
Car.getCarMileageByCID = function(id, result) {
  sql.query("SELECT current_mileage FROM `AutomotiveApp`.`vehicles` WHERE c_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}
Car.deleteCarByCID = function(id, result){
sql.query("DELETE from `AutomotiveApp`.`vehicles` WHERE u_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}
module.exports = Car;
//#########################################################################################